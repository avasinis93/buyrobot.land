#!/usr/bin/env python3
"""
Generate application mosaic illustrations for BuyRobot using Gemini image generation.
Usage: GEMINI_API_KEY=your_key python3 scripts/generate-mosaic-images.py
"""

import mimetypes
import os
import sys
import time
from google import genai
from google.genai import types

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images", "applications")

MASTER_STYLE = """Style: isometric technical line illustration, editorial magazine quality,
minimalist monochrome with single accent color. Clean 1-2pt line weight,
no fills. Subtle off-white background (#fafaf8). Mechanical detail
prioritized — visible joints, sensors, panel seams, mounting hardware.
Slight 3D perspective (isometric or axonometric projection, not flat).
Hand-drawn feel, not vector-perfect. Negative space generous.
Aspect ratio 3:2 landscape. Reference: Dieter Rams industrial illustrations,
Stripe technical diagrams, vintage aerospace manuals, McMaster-Carr catalog line art.

Absolutely avoid: cartoon style, rounded characters, gradient fills,
drop shadows, glow effects, purple-blue AI gradients, Corporate Memphis
style, flat icon aesthetic, emoji-like elements, 3D rendered look,
photorealistic textures.

Primary: black ink (#1a1a1a) — 95% of all linework
Secondary: warm gray (#999999) — for depth, shadows, distant elements
Accent: one color per scene, used sparingly (5-10% of image)
Background: off-white paper tone (#fafaf8) — NEVER pure white"""

SCENES = {
    "wildfire-response": """Scene: An agricultural-style drone viewed from slight side-angle, carrying a
large water tank underneath, releasing a curtain of water droplets onto a
small cluster of pine trees with orange flames licking at their trunks.
Thin wisps of smoke rising from the trees as dashed gray lines. The drone
is depicted with clear mechanical detail — visible propeller arcs drawn as
dashed circles showing motion, four motor housings, landing gear folded up,
camera sensor visible underneath. Gentle hilly terrain beneath, drawn with
simple contour lines. The drone is in the upper-right of the frame, the
burning trees in the lower-left, creating diagonal composition tension.

Accent color: warm red #d44 used ONLY for flames and smoke highlights.
Water droplets in muted blue #68b. Everything else in black and gray.

Feel: urgency and capability. This drone is doing serious work.""",

    "factory-assembly": """Scene: A detailed 6-axis industrial robot arm mid-weld over a conveyor belt.
The arm is the visual anchor — show each joint clearly with visible rotational
mechanisms, cable routing along the arm segments, a welding tool at the end
effector. Small welding sparks drawn as short radiating lines from the weld
point. The conveyor belt extends horizontally across the bottom third of the
frame with three rectangular parts visible on it, each drawn with isometric
perspective. Simple factory floor grid pattern below. A motion arc in light
dashed line showing the arm's range of motion sweeping above.

Background hint: simple outline of a factory ceiling with overhead crane rail
drawn minimally at the top.

Accent color: none — grayscale only. Optional tiny amber dots (#c85) for
weld sparks (3-5 dots max).

Feel: precision and scale. Industrial work happening at speed.""",

    "precision-agriculture": """Scene: A large agricultural spraying drone seen from slight aerial angle,
hovering above neat parallel rows of crops. The drone has a prominent
liquid tank underneath with visible spray nozzles extending downward,
releasing a fine mist depicted as small dots and dashed lines fanning out
below. Crops are drawn as small dot clusters in repeating rows, suggesting
a large field receding toward the horizon. A dashed GPS path line arcs
across the top showing the drone's programmed route.

The drone has four large propeller arms with motor housings, visible
landing skids, and a boxy central body housing the spray tank. Include
small detail: camera/sensor array under the nose.

Accent color: muted sage green #8b6 for crops and spray mist. Drone in
black line work.

Feel: methodical, scientific agriculture. Not folksy — this is
precision farming.""",

    "food-beverage": """Scene: A 6-axis collaborative robot arm (cobot) mounted behind a café
counter, its gripper delicately holding a small paper coffee cup near
an espresso machine. The cobot's arm is drawn with clear joint circles
and a modern sleek profile — white/light housing implied by line work,
not fills. An espresso machine to the right with portafilter, steam
wand, cup platform, and a small coffee pouring into a cup underneath.
Two wispy steam lines rising from the fresh cup.

Background: a menu board on the left wall with horizontal text lines
(no legible text), a counter edge visible. Clean café aesthetic.

The cobot should look industrial-grade but approachable — not a
human-shaped robot, but clearly a professional machine adapted to
hospitality.

Accent color: none — grayscale only. Very faint sage for the
coffee inside the cup.

Feel: surprising pairing of industrial and hospitality. The future is
here, and it makes your cappuccino.""",

    "warehouse-logistics": """Scene: A modern Autonomous Mobile Robot (AMR) viewed from three-quarter
front angle, navigating between two tall warehouse shelving units drawn
in isometric perspective. The AMR is a low, boxy wheeled platform
carrying a cardboard shipping box on top. Visible details: LiDAR sensor
on top corner (small rectangular unit), two wheels with rim detail, side
panels with subtle vents, LED strip indicator on front.

Three dashed scan lines radiate from the LiDAR upward and forward,
representing its sensing field. A faint dashed line on the ground shows
the AMR's planned path curving around into the distance.

The shelving units on both sides recede into the distance with isometric
depth, showing 3-4 shelf levels each with various box shapes stored.
Warehouse floor with very light grid pattern.

Accent color: none — grayscale only. Optional: single LED dot on front
of AMR in warm amber (#c85).

Feel: efficient, quiet automation. The invisible backbone of modern
logistics.""",

    "building-maintenance": """Scene: A mid-size drone equipped with a cleaning attachment, hovering
next to a tall glass building facade. The drone has four rotors with
motor housings, and extending forward from its body is a cleaning arm/
squeegee apparatus pressed against a window. Fine mist of cleaning
solution drawn as dashed lines between the cleaner and the window.

The building facade dominates 60% of the frame on the right side, drawn
with a grid of rectangular windows in isometric perspective receding
upward. Two or three windows show small "sparkle" marks (simple
4-pointed stars) indicating they've been cleaned.

A thin dashed tether line runs from the drone up and out of frame,
implying rooftop tether connection.

Accent color: muted blue #68b for cleaning mist/solution only.

Feel: vertical work that no longer risks human lives. Future-of-work
substance.""",

    "surgical-assistance": """Scene: A multi-arm surgical robot (da Vinci style) viewed from a slight
side angle over an operating table. Three or four articulated arms
extending downward from a central column, each arm ending in small
surgical tool attachments. The operating table below is suggested with
simple lines — a rectangular surface with legs, and a very subtle
silhouette of a patient under a drape (no anatomical detail, just a
suggestive shape).

Above the table, a surgical light drawn as an ellipse with thin "light
cone" dashed lines extending downward. To the left, a monitor screen on
a stand showing horizontal readout lines.

Each robotic arm should show joint circles, cable routing, and precision
tool tips. The central column is a cylindrical body with visible panel
seams.

Background: clean operating room, suggested with simple corner lines,
not filled in.

Accent color: muted teal #5aa used only for the monitor screen and one
subtle indicator light.

Feel: precision, calm, trust. This is medicine at its most advanced.""",

    "last-mile-delivery": """Scene: A delivery drone in flight over a suburban street, carrying a
small package suspended on two short tether lines beneath it. The drone
has a quadcopter design with clearly visible motor housings on each arm.
Below and to either side of the drone, two simple house silhouettes are
drawn in isometric perspective — one on the left (origin), one on the
right (destination) — with triangular roofs and small windows.

A dashed flight path arcs from the left house up across the sky to the
drone's current position, then continues in a dashed preview arc toward
the right house. Over the destination house, a small circular landing
target drawn as concentric circles.

Subtle ground line with minimal vegetation hints (small dashes for
grass). Sky kept mostly empty with just the dashed path.

Accent color: warm amber #c85 for the landing target circles only.

Feel: the sky as infrastructure. Mundane logistics reimagined.""",
}


def save_binary_file(file_name, data):
    with open(file_name, "wb") as f:
        f.write(data)
    print(f"  Saved: {file_name}")


def generate_image(client, scene_name, scene_prompt):
    print(f"\n{'='*60}")
    print(f"Generating: {scene_name}")
    print(f"{'='*60}")

    full_prompt = f"{MASTER_STYLE}\n\n{scene_prompt}"

    contents = [
        types.Content(
            role="user",
            parts=[types.Part.from_text(text=full_prompt)],
        ),
    ]

    generate_content_config = types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(thinking_level="MINIMAL"),
        image_config=types.ImageConfig(
            aspect_ratio="16:9",
        ),
        response_modalities=["IMAGE"],
    )

    output_path = None
    for chunk in client.models.generate_content_stream(
        model="gemini-3.1-flash-image-preview",
        contents=contents,
        config=generate_content_config,
    ):
        if chunk.parts is None:
            continue
        if chunk.parts[0].inline_data and chunk.parts[0].inline_data.data:
            inline_data = chunk.parts[0].inline_data
            file_extension = mimetypes.guess_extension(inline_data.mime_type) or ".png"
            output_path = os.path.join(OUTPUT_DIR, f"{scene_name}{file_extension}")
            save_binary_file(output_path, inline_data.data)
        elif text := chunk.text:
            print(f"  Model: {text}")

    return output_path


def main():
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("ERROR: Set GEMINI_API_KEY environment variable")
        sys.exit(1)

    client = genai.Client(api_key=api_key)
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # Generate specific scenes if passed as args, otherwise all
    scenes_to_generate = sys.argv[1:] if len(sys.argv) > 1 else list(SCENES.keys())

    results = {}
    for scene_name in scenes_to_generate:
        if scene_name not in SCENES:
            print(f"Unknown scene: {scene_name}. Available: {list(SCENES.keys())}")
            continue

        try:
            path = generate_image(client, scene_name, SCENES[scene_name])
            results[scene_name] = path
            # Small delay between API calls to avoid rate limits
            if scene_name != scenes_to_generate[-1]:
                print("  Waiting 3s before next generation...")
                time.sleep(3)
        except Exception as e:
            print(f"  ERROR generating {scene_name}: {e}")
            results[scene_name] = None

    print(f"\n{'='*60}")
    print("RESULTS:")
    print(f"{'='*60}")
    for name, path in results.items():
        status = "✓" if path else "✗"
        print(f"  {status} {name}: {path or 'FAILED'}")

    successful = sum(1 for p in results.values() if p)
    print(f"\n{successful}/{len(results)} images generated successfully")
    print(f"Output directory: {OUTPUT_DIR}")


if __name__ == "__main__":
    main()
