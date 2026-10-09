// Enhancement: native CV content is transcribed from the PDF already bundled in /public.
// Keeping it in structured data makes the /cv page accessible and searchable while the PDF remains downloadable.
export const education = [
  {
    institution: 'University at Buffalo (UB)',
    degree: 'PhD in Mechanical Engineering',
    detail: 'Multiscale Modeling, Electrospray Deposition, Soft Microrobotics · Advisor: Dr. Xin Yong · Lab: SaIL',
    dates: 'Jan 2026 – Present',
  },
  {
    institution: 'University of Illinois Urbana-Champaign (UIUC)',
    degree: 'MEng in Mechanical Engineering',
    detail: 'Specialization: Robotics and Robust Adaptive Control · GPA: 3.80 / 4.00',
    dates: 'Aug 2023 – Dec 2024',
  },
  {
    institution: 'Indian Institute of Technology (IIT) Gandhinagar',
    degree: 'BTech (Honors) in Mechanical Engineering with Minor in Physics',
    detail: 'GPA: 8.24 / 10.00',
    dates: 'Jul 2018 – Jul 2022',
  },
];

export const experience = [
  {
    role: 'Mechanical Engineer',
    organization: 'OneCommunity Global Inc · Remote',
    dates: 'Feb 2025 – Jan 2026',
    bullets: [
      'Simulated traditional geodesic dome and proposed City Center Dome designs in Autodesk Inventor with Frame Analysis, applying realistic boundary conditions and environmental load cases including wind, snow, and seismic loading.',
      'Improved support and joint constraints to eliminate spurious rotational modes in structural FEA and structured analysis workflows around ASCE 7-22 and IBC 2021 standards.',
    ],
  },
  {
    role: 'Mechanical Design Intern',
    organization: 'Sulzer Inc · Portland, OR',
    dates: 'Jul 2024 – Aug 2024',
    bullets: [
      'Developed CAD features in Onshape using FeatureScript for parametric design, automated geometry generation, and animated feature constraints.',
      'Conducted modal and stress analysis for rotating components and coordinated part procurement, rapid prototyping, and assembly for design validation.',
    ],
  },
  {
    role: 'CAE Intern',
    organization: 'L&T Technology Services Ltd · India',
    dates: 'Apr 2023 – Jul 2023',
    bullets: [
      'Performed meshing, geometry cleanup, and structural, thermal, and modal analyses on automotive electronic components using SpaceClaim and ANSYS Mechanical.',
      'Automated structural and thermal FEA workflows in ANSYS using Python/APDL and translated material specifications into manufacturable thermal models with DigiMAT-calibrated inputs.',
    ],
  },
];

export const skills = [
  { label: 'Programming', items: 'Python, MATLAB, ROS, PyTorch, TensorFlow, Git, RStudio' },
  { label: 'Manufacturing', items: 'GD&T, Assembly, Lean Six Sigma, Design for Manufacturing, DMAIC, DFMEA, Root Cause Analysis' },
  { label: 'Controls', items: 'MATLAB Simulink, RSLQR, Flight Controls, Dynamics Modeling, HMI, RSLogix500' },
  { label: 'Modeling', items: 'Fusion 360, Autodesk Inventor, SolidWorks, ANSYS Workbench, PTC Onshape, Abaqus' },
  { label: 'Certificates', items: 'Lean Six Sigma Green Belt, Digital Twins, PLC Fundamentals, Business Management for Engineers' },
];
