"use client";

import React from "react";

interface IconProps {
  size?: number;
}

const COLORS = {
  primary: "#1a1a1a",
  secondary: "#999",
  tertiary: "#ccc",
};

const SW = 1.4;

export const DroneIcon: React.FC<IconProps> = ({ size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Center hexagonal body */}
    <path
      d="M50,48 L70,48 L76,58 L70,68 L50,68 L44,58 Z"
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />

    {/* Landing gear */}
    <line x1={50} y1={68} x2={46} y2={76} stroke={COLORS.secondary} strokeWidth={SW} />
    <line x1={70} y1={68} x2={74} y2={76} stroke={COLORS.secondary} strokeWidth={SW} />
    <line x1={42} y1={76} x2={50} y2={76} stroke={COLORS.secondary} strokeWidth={SW} />
    <line x1={70} y1={76} x2={78} y2={76} stroke={COLORS.secondary} strokeWidth={SW} />

    {/* Arms from center to motor mounts */}
    <line x1={50} y1={52} x2={30} y2={38} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={70} y1={52} x2={90} y2={38} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={50} y1={64} x2={30} y2={74} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={70} y1={64} x2={90} y2={74} stroke={COLORS.primary} strokeWidth={SW} />

    {/* Motor housings - top left */}
    <ellipse cx={30} cy={36} rx={8} ry={3} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    <ellipse cx={30} cy={40} rx={8} ry={3} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    <line x1={22} y1={36} x2={22} y2={40} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={38} y1={36} x2={38} y2={40} stroke={COLORS.primary} strokeWidth={SW} />

    {/* Motor housings - top right */}
    <ellipse cx={90} cy={36} rx={8} ry={3} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    <ellipse cx={90} cy={40} rx={8} ry={3} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    <line x1={82} y1={36} x2={82} y2={40} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={98} y1={36} x2={98} y2={40} stroke={COLORS.primary} strokeWidth={SW} />

    {/* Motor housings - bottom left */}
    <ellipse cx={30} cy={72} rx={8} ry={3} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    <ellipse cx={30} cy={76} rx={8} ry={3} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    <line x1={22} y1={72} x2={22} y2={76} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={38} y1={72} x2={38} y2={76} stroke={COLORS.primary} strokeWidth={SW} />

    {/* Motor housings - bottom right */}
    <ellipse cx={90} cy={72} rx={8} ry={3} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    <ellipse cx={90} cy={76} rx={8} ry={3} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    <line x1={82} y1={72} x2={82} y2={76} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={98} y1={72} x2={98} y2={76} stroke={COLORS.primary} strokeWidth={SW} />

    {/* Propeller arcs - dashed */}
    <path
      d="M18,33 Q30,26 42,33"
      stroke={COLORS.tertiary}
      strokeWidth={SW}
      strokeDasharray="3 2"
      fill="none"
    />
    <path
      d="M78,33 Q90,26 102,33"
      stroke={COLORS.tertiary}
      strokeWidth={SW}
      strokeDasharray="3 2"
      fill="none"
    />
    <path
      d="M18,69 Q30,62 42,69"
      stroke={COLORS.tertiary}
      strokeWidth={SW}
      strokeDasharray="3 2"
      fill="none"
    />
    <path
      d="M78,69 Q90,62 102,69"
      stroke={COLORS.tertiary}
      strokeWidth={SW}
      strokeDasharray="3 2"
      fill="none"
    />

    {/* Camera underneath */}
    <circle cx={60} cy={66} r={3} stroke={COLORS.secondary} strokeWidth={SW} fill="none" />
  </svg>
);

export const ArmIcon: React.FC<IconProps> = ({ size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Base - isometric box */}
    <path
      d="M35,95 L60,105 L85,95 L85,88 L60,98 L35,88 Z"
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />
    <path
      d="M35,88 L60,98 L85,88 L60,78 Z"
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />

    {/* Turntable ellipse */}
    <ellipse cx={60} cy={78} rx={14} ry={5} stroke={COLORS.secondary} strokeWidth={SW} fill="none" />

    {/* Shoulder joint */}
    <circle cx={60} cy={72} r={4} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    <circle cx={60} cy={72} r={1.5} fill={COLORS.primary} />

    {/* Upper arm beam */}
    <path
      d="M57,68 L42,42"
      stroke={COLORS.primary}
      strokeWidth={SW + 0.4}
      strokeLinecap="round"
    />

    {/* Elbow joint */}
    <circle cx={44} cy={41} r={3.5} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    <circle cx={44} cy={41} r={1.2} fill={COLORS.primary} />

    {/* Forearm beam */}
    <path
      d="M47,38 L72,28"
      stroke={COLORS.primary}
      strokeWidth={SW + 0.4}
      strokeLinecap="round"
    />

    {/* Wrist joint */}
    <circle cx={73} cy={29} r={3} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    <circle cx={73} cy={29} r={1} fill={COLORS.primary} />

    {/* Gripper */}
    <line x1={76} y1={27} x2={86} y2={18} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={86} y1={18} x2={92} y2={16} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={76} y1={27} x2={88} y2={22} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={88} y1={22} x2={94} y2={22} stroke={COLORS.primary} strokeWidth={SW} />

    {/* Cable path */}
    <path
      d="M58,70 Q46,55 44,43 Q44,35 50,32 Q62,28 72,29"
      stroke={COLORS.secondary}
      strokeWidth={0.8}
      fill="none"
    />

    {/* Range-of-motion dashed arc */}
    <path
      d="M30,80 Q20,50 40,25"
      stroke={COLORS.tertiary}
      strokeWidth={SW}
      strokeDasharray="4 3"
      fill="none"
    />
  </svg>
);

export const MobileIcon: React.FC<IconProps> = ({ size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Isometric box body */}
    <path
      d="M30,55 L60,40 L90,55 L90,80 L60,95 L30,80 Z"
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />
    <path d="M60,40 L60,95" stroke={COLORS.primary} strokeWidth={SW} />
    <path d="M30,55 L60,70 L90,55" stroke={COLORS.primary} strokeWidth={SW} />

    {/* LiDAR unit on top */}
    <rect
      x={52}
      y={32}
      width={16}
      height={8}
      rx={1}
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
      transform="rotate(-15, 60, 36)"
    />
    <ellipse
      cx={60}
      cy={32}
      rx={6}
      ry={2.5}
      stroke={COLORS.secondary}
      strokeWidth={SW}
      fill="none"
    />

    {/* Scan lines from LiDAR */}
    <line
      x1={60}
      y1={30}
      x2={40}
      y2={20}
      stroke={COLORS.tertiary}
      strokeWidth={0.8}
      strokeDasharray="2 2"
    />
    <line
      x1={60}
      y1={30}
      x2={60}
      y2={18}
      stroke={COLORS.tertiary}
      strokeWidth={0.8}
      strokeDasharray="2 2"
    />
    <line
      x1={60}
      y1={30}
      x2={80}
      y2={20}
      stroke={COLORS.tertiary}
      strokeWidth={0.8}
      strokeDasharray="2 2"
    />

    {/* Left wheel */}
    <ellipse cx={34} cy={82} rx={6} ry={10} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    <ellipse
      cx={34}
      cy={82}
      rx={2}
      ry={4}
      stroke={COLORS.secondary}
      strokeWidth={0.8}
      fill="none"
    />

    {/* Right wheel */}
    <ellipse cx={86} cy={82} rx={6} ry={10} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    <ellipse
      cx={86}
      cy={82}
      rx={2}
      ry={4}
      stroke={COLORS.secondary}
      strokeWidth={0.8}
      fill="none"
    />

    {/* LED strip on front */}
    <line x1={62} y1={68} x2={88} y2={56} stroke={COLORS.secondary} strokeWidth={2} />
  </svg>
);

export const QuadrupedIcon: React.FC<IconProps> = ({ size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Isometric 3D box body */}
    <path
      d="M30,45 L60,32 L90,45 L90,60 L60,73 L30,60 Z"
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />
    <path d="M60,32 L60,73" stroke={COLORS.primary} strokeWidth={SW} />
    <path d="M30,45 L60,58 L90,45" stroke={COLORS.primary} strokeWidth={SW} />

    {/* Angular head */}
    <path
      d="M22,42 L30,35 L42,35 L42,45 L30,45 Z"
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />
    {/* Sensor dots on head */}
    <circle cx={27} cy={39} r={1.2} fill={COLORS.secondary} />
    <circle cx={32} cy={37} r={1.2} fill={COLORS.secondary} />

    {/* Payload rail on top */}
    <line x1={45} y1={36} x2={75} y2={36} stroke={COLORS.secondary} strokeWidth={SW} />
    <line x1={48} y1={34} x2={48} y2={38} stroke={COLORS.secondary} strokeWidth={1} />
    <line x1={72} y1={34} x2={72} y2={38} stroke={COLORS.secondary} strokeWidth={1} />

    {/* Front-left leg */}
    <circle cx={35} cy={60} r={2} stroke={COLORS.primary} strokeWidth={1} fill="none" />
    <line x1={35} y1={62} x2={30} y2={74} stroke={COLORS.primary} strokeWidth={SW} />
    <circle cx={30} cy={74} r={1.5} stroke={COLORS.primary} strokeWidth={1} fill="none" />
    <line x1={30} y1={75.5} x2={26} y2={88} stroke={COLORS.primary} strokeWidth={SW} />
    <circle cx={26} cy={88} r={1.5} stroke={COLORS.primary} strokeWidth={1} fill="none" />
    <line x1={26} y1={89.5} x2={24} y2={96} stroke={COLORS.primary} strokeWidth={SW} />
    <ellipse cx={24} cy={98} rx={4} ry={2} stroke={COLORS.primary} strokeWidth={1} fill="none" />

    {/* Front-right leg */}
    <circle cx={65} cy={58} r={2} stroke={COLORS.primary} strokeWidth={1} fill="none" />
    <line x1={65} y1={60} x2={68} y2={72} stroke={COLORS.primary} strokeWidth={SW} />
    <circle cx={68} cy={72} r={1.5} stroke={COLORS.primary} strokeWidth={1} fill="none" />
    <line x1={68} y1={73.5} x2={72} y2={86} stroke={COLORS.primary} strokeWidth={SW} />
    <circle cx={72} cy={86} r={1.5} stroke={COLORS.primary} strokeWidth={1} fill="none" />
    <line x1={72} y1={87.5} x2={74} y2={94} stroke={COLORS.primary} strokeWidth={SW} />
    <ellipse cx={74} cy={96} rx={4} ry={2} stroke={COLORS.primary} strokeWidth={1} fill="none" />

    {/* Back-left leg */}
    <circle cx={42} cy={68} r={2} stroke={COLORS.primary} strokeWidth={1} fill="none" />
    <line x1={42} y1={70} x2={38} y2={80} stroke={COLORS.primary} strokeWidth={SW} />
    <circle cx={38} cy={80} r={1.5} stroke={COLORS.primary} strokeWidth={1} fill="none" />
    <line x1={38} y1={81.5} x2={34} y2={92} stroke={COLORS.primary} strokeWidth={SW} />
    <circle cx={34} cy={92} r={1.5} stroke={COLORS.primary} strokeWidth={1} fill="none" />
    <line x1={34} y1={93.5} x2={32} y2={100} stroke={COLORS.primary} strokeWidth={SW} />
    <ellipse cx={32} cy={102} rx={4} ry={2} stroke={COLORS.primary} strokeWidth={1} fill="none" />

    {/* Back-right leg */}
    <circle cx={78} cy={60} r={2} stroke={COLORS.primary} strokeWidth={1} fill="none" />
    <line x1={78} y1={62} x2={82} y2={74} stroke={COLORS.primary} strokeWidth={SW} />
    <circle cx={82} cy={74} r={1.5} stroke={COLORS.primary} strokeWidth={1} fill="none" />
    <line x1={82} y1={75.5} x2={86} y2={88} stroke={COLORS.primary} strokeWidth={SW} />
    <circle cx={86} cy={88} r={1.5} stroke={COLORS.primary} strokeWidth={1} fill="none" />
    <line x1={86} y1={89.5} x2={88} y2={96} stroke={COLORS.primary} strokeWidth={SW} />
    <ellipse cx={88} cy={98} rx={4} ry={2} stroke={COLORS.primary} strokeWidth={1} fill="none" />
  </svg>
);

export const HumanoidIcon: React.FC<IconProps> = ({ size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Angular 3D head */}
    <path
      d="M50,14 L70,14 L73,18 L73,28 L70,32 L50,32 L47,28 L47,18 Z"
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />
    {/* Face sensor bar */}
    <rect
      x={52}
      y={21}
      width={16}
      height={4}
      rx={1}
      stroke={COLORS.secondary}
      strokeWidth={1}
      fill="none"
    />

    {/* Neck */}
    <rect
      x={56}
      y={32}
      width={8}
      height={5}
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />

    {/* Isometric torso */}
    <path
      d="M42,37 L60,34 L78,37 L78,58 L60,62 L42,58 Z"
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />
    {/* Chest panel */}
    <path d="M50,40 L70,40" stroke={COLORS.secondary} strokeWidth={0.8} />
    <path d="M48,45 L72,45" stroke={COLORS.secondary} strokeWidth={0.8} />
    <path d="M50,50 L70,50" stroke={COLORS.secondary} strokeWidth={0.8} />

    {/* Left shoulder joint */}
    <circle cx={42} cy={38} r={3} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    {/* Left upper arm */}
    <line x1={39} y1={40} x2={32} y2={52} stroke={COLORS.primary} strokeWidth={SW} />
    {/* Left elbow */}
    <circle cx={32} cy={52} r={2.5} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    {/* Left lower arm */}
    <line x1={32} y1={54.5} x2={28} y2={66} stroke={COLORS.primary} strokeWidth={SW} />
    {/* Left hand - gripper fingers */}
    <line x1={28} y1={66} x2={24} y2={70} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={28} y1={66} x2={28} y2={71} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={28} y1={66} x2={31} y2={70} stroke={COLORS.primary} strokeWidth={SW} />

    {/* Right shoulder joint */}
    <circle cx={78} cy={38} r={3} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    {/* Right upper arm */}
    <line x1={81} y1={40} x2={88} y2={52} stroke={COLORS.primary} strokeWidth={SW} />
    {/* Right elbow */}
    <circle cx={88} cy={52} r={2.5} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    {/* Right lower arm */}
    <line x1={88} y1={54.5} x2={92} y2={66} stroke={COLORS.primary} strokeWidth={SW} />
    {/* Right hand - gripper fingers */}
    <line x1={92} y1={66} x2={96} y2={70} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={92} y1={66} x2={92} y2={71} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={92} y1={66} x2={89} y2={70} stroke={COLORS.primary} strokeWidth={SW} />

    {/* Hip path */}
    <path d="M48,58 Q60,65 72,58" stroke={COLORS.primary} strokeWidth={SW} fill="none" />

    {/* Left upper leg */}
    <line x1={52} y1={62} x2={48} y2={78} stroke={COLORS.primary} strokeWidth={SW} />
    {/* Left knee */}
    <circle cx={48} cy={78} r={2.5} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    {/* Left lower leg */}
    <line x1={48} y1={80.5} x2={45} y2={96} stroke={COLORS.primary} strokeWidth={SW} />
    {/* Left foot */}
    <path
      d="M40,96 L45,96 L50,98 L40,98 Z"
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />

    {/* Right upper leg */}
    <line x1={68} y1={62} x2={72} y2={78} stroke={COLORS.primary} strokeWidth={SW} />
    {/* Right knee */}
    <circle cx={72} cy={78} r={2.5} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    {/* Right lower leg */}
    <line x1={72} y1={80.5} x2={75} y2={96} stroke={COLORS.primary} strokeWidth={SW} />
    {/* Right foot */}
    <path
      d="M70,96 L75,96 L80,98 L70,98 Z"
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />
  </svg>
);

export const ExoskeletonIcon: React.FC<IconProps> = ({ size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Light human silhouette */}
    <circle cx={60} cy={18} r={7} stroke={COLORS.tertiary} strokeWidth={1} fill="none" />
    <line x1={60} y1={25} x2={60} y2={55} stroke={COLORS.tertiary} strokeWidth={1} />
    <line x1={60} y1={32} x2={42} y2={50} stroke={COLORS.tertiary} strokeWidth={1} />
    <line x1={60} y1={32} x2={78} y2={50} stroke={COLORS.tertiary} strokeWidth={1} />
    <line x1={60} y1={55} x2={48} y2={80} stroke={COLORS.tertiary} strokeWidth={1} />
    <line x1={60} y1={55} x2={72} y2={80} stroke={COLORS.tertiary} strokeWidth={1} />
    <line x1={48} y1={80} x2={44} y2={100} stroke={COLORS.tertiary} strokeWidth={1} />
    <line x1={72} y1={80} x2={76} y2={100} stroke={COLORS.tertiary} strokeWidth={1} />

    {/* Exo frame spine */}
    <path
      d="M56,26 L56,55"
      stroke={COLORS.primary}
      strokeWidth={SW + 0.6}
      strokeLinecap="round"
    />
    <path
      d="M64,26 L64,55"
      stroke={COLORS.primary}
      strokeWidth={SW + 0.6}
      strokeLinecap="round"
    />
    <line x1={56} y1={30} x2={64} y2={30} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={56} y1={40} x2={64} y2={40} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={56} y1={50} x2={64} y2={50} stroke={COLORS.primary} strokeWidth={SW} />

    {/* Backpack power unit */}
    <rect
      x={54}
      y={28}
      width={12}
      height={16}
      rx={2}
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />
    <line x1={57} y1={32} x2={63} y2={32} stroke={COLORS.secondary} strokeWidth={0.8} />
    <line x1={57} y1={36} x2={63} y2={36} stroke={COLORS.secondary} strokeWidth={0.8} />

    {/* Actuator pack at left hip */}
    <rect
      x={46}
      y={52}
      width={8}
      height={10}
      rx={1}
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />

    {/* Actuator pack at right hip */}
    <rect
      x={66}
      y={52}
      width={8}
      height={10}
      rx={1}
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />

    {/* Left exo leg */}
    <line x1={50} y1={62} x2={46} y2={76} stroke={COLORS.primary} strokeWidth={SW + 0.4} />
    <circle cx={46} cy={76} r={3} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    <circle cx={46} cy={76} r={1} fill={COLORS.primary} />
    <line x1={46} y1={79} x2={42} y2={95} stroke={COLORS.primary} strokeWidth={SW + 0.4} />
    <circle cx={42} cy={95} r={2.5} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    {/* Left foot platform */}
    <rect
      x={34}
      y={98}
      width={16}
      height={4}
      rx={1}
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />

    {/* Right exo leg */}
    <line x1={70} y1={62} x2={74} y2={76} stroke={COLORS.primary} strokeWidth={SW + 0.4} />
    <circle cx={74} cy={76} r={3} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    <circle cx={74} cy={76} r={1} fill={COLORS.primary} />
    <line x1={74} y1={79} x2={78} y2={95} stroke={COLORS.primary} strokeWidth={SW + 0.4} />
    <circle cx={78} cy={95} r={2.5} stroke={COLORS.primary} strokeWidth={SW} fill="none" />
    {/* Right foot platform */}
    <rect
      x={70}
      y={98}
      width={16}
      height={4}
      rx={1}
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />
  </svg>
);

export const UnderwaterIcon: React.FC<IconProps> = ({ size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Torpedo-shaped isometric body */}
    <path
      d="M25,55 Q25,42 40,38 L80,38 Q100,42 100,55 Q100,68 80,72 L40,72 Q25,68 25,55 Z"
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />
    {/* Panel lines */}
    <line x1={50} y1={38} x2={50} y2={72} stroke={COLORS.secondary} strokeWidth={0.8} />
    <line x1={75} y1={38} x2={75} y2={72} stroke={COLORS.secondary} strokeWidth={0.8} />

    {/* Camera dome at front */}
    <path
      d="M25,55 Q18,55 18,50 Q18,44 25,44"
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />
    {/* Lens circles */}
    <circle cx={22} cy={49} r={2.5} stroke={COLORS.secondary} strokeWidth={SW} fill="none" />
    <circle cx={22} cy={49} r={1} fill={COLORS.secondary} />

    {/* Top thruster */}
    <rect
      x={55}
      y={30}
      width={14}
      height={8}
      rx={1}
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />

    {/* Side thruster */}
    <rect
      x={55}
      y={72}
      width={14}
      height={8}
      rx={1}
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />

    {/* Back thruster */}
    <ellipse
      cx={102}
      cy={55}
      rx={4}
      ry={8}
      stroke={COLORS.primary}
      strokeWidth={SW}
      fill="none"
    />
    <line x1={100} y1={50} x2={108} y2={50} stroke={COLORS.secondary} strokeWidth={0.8} />
    <line x1={100} y1={55} x2={110} y2={55} stroke={COLORS.secondary} strokeWidth={0.8} />
    <line x1={100} y1={60} x2={108} y2={60} stroke={COLORS.secondary} strokeWidth={0.8} />

    {/* Manipulator arm */}
    <line x1={38} y1={72} x2={32} y2={84} stroke={COLORS.primary} strokeWidth={SW} />
    <circle cx={32} cy={84} r={2} stroke={COLORS.primary} strokeWidth={1} fill="none" />
    <line x1={32} y1={86} x2={28} y2={94} stroke={COLORS.primary} strokeWidth={SW} />
    {/* Gripper */}
    <line x1={28} y1={94} x2={24} y2={98} stroke={COLORS.primary} strokeWidth={SW} />
    <line x1={28} y1={94} x2={32} y2={98} stroke={COLORS.primary} strokeWidth={SW} />

    {/* Tether port */}
    <circle cx={96} cy={55} r={2.5} stroke={COLORS.secondary} strokeWidth={SW} fill="none" />

    {/* Bubbles */}
    <circle cx={14} cy={38} r={2} stroke={COLORS.tertiary} strokeWidth={1} fill="none" />
    <circle cx={10} cy={30} r={1.5} stroke={COLORS.tertiary} strokeWidth={1} fill="none" />
    <circle cx={16} cy={24} r={1} stroke={COLORS.tertiary} strokeWidth={1} fill="none" />
  </svg>
);

// Map type strings to icon components
const iconMap: Record<string, React.FC<IconProps>> = {
  Drone: DroneIcon,
  AERI: DroneIcon,
  "Robotic arm": ArmIcon,
  ARM: ArmIcon,
  "Mobile robot": MobileIcon,
  MOBI: MobileIcon,
  Quadruped: QuadrupedIcon,
  QUAD: QuadrupedIcon,
  Humanoid: HumanoidIcon,
  BIPD: HumanoidIcon,
  Exoskeleton: ExoskeletonIcon,
  WEAR: ExoskeletonIcon,
  Underwater: UnderwaterIcon,
  AQUA: UnderwaterIcon,
};

interface RobotIconProps {
  type: string;
  size?: number;
}

export const RobotIcon: React.FC<RobotIconProps> = ({ type, size = 100 }) => {
  const IconComponent = iconMap[type] ?? DroneIcon;
  return <IconComponent size={size} />;
};

export default RobotIcon;
