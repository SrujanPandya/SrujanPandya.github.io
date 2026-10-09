// Enhancement: every project now has a stable slug and its own verified, data-driven detail content.
export const projects = [
  {
    slug: 'ur3-card-matching-vision',
    year: '2023',
    context: 'UIUC',
    title: 'UR3 Arm + Vision: Card-Matching Bot',
    tags: ['robotics', 'computer vision', 'ROS'],
    summary: 'Automated a memory card-matching game using a UR3 arm and OpenCV-based template matching in Python, with camera calibration and pixel-to-world transformation in ROS.',
    sections: [
      {
        heading: 'What I built',
        paragraphs: [
          'The system automated a memory card-matching game using a UR3 robotic arm and OpenCV-based template matching in Python.',
          'Camera calibration was used to improve reliability and support accurate pixel-to-world frame transformation within ROS.',
        ],
      },
    ],
    tools: ['UR3', 'OpenCV', 'Python', 'ROS'],
  },
  {
    slug: 'dual-quadcopter-aerial-delivery',
    year: '2021',
    context: 'UC Merced · Prof. Sachin Goyal',
    title: 'Aerial Delivery Transportation with Dual Quadcopter',
    tags: ['flight controls', 'simulation', 'dynamics'],
    summary: 'Implemented cable-suspended payload control for two quadcopters using Simulink and Simscape Multibody, with leader-follower synchronization and PID tuning to reduce payload swing.',
    sections: [
      {
        heading: 'Control and simulation',
        paragraphs: [
          'The project modeled a cable-suspended payload transported by two quadcopters using MATLAB Simulink and Simscape Multibody.',
          'A leader-follower control strategy synchronized the vehicles, while PID tuning was used to improve flight stability and minimize payload swing.',
        ],
      },
    ],
    tools: ['MATLAB Simulink', 'Simscape Multibody', 'PID control'],
  },
  {
    slug: 'patient-integrated-joint-impedance-control',
    year: '2021',
    context: 'Timetooth Technologies · IIT',
    title: 'Patient-Integrated Joint Impedance Control',
    tags: ['controls', 'robot dynamics', 'assistive robotics'],
    summary: 'Integrated 2-DOF robot dynamics with joint-level impedance control to simulate assisted lower-limb motion under varying patient effort.',
    sections: [
      {
        heading: 'System model',
        paragraphs: [
          'The project integrated a two-degree-of-freedom robot dynamics model with joint-level impedance control to simulate assisted lower-limb motion.',
          'Interaction torques between the actuator and human limb were modeled to connect the mechanical dynamics with the control logic for more natural assisted motion.',
        ],
      },
    ],
    tools: ['2-DOF dynamics', 'impedance control', 'interaction torque modeling'],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
