import { QuestionPool } from "@/types/quiz";

// Creating a large question pool with 5 topics, 3 difficulty levels, and 30 questions each
const questionPool: QuestionPool = {
  physics: {
    easy: [
      {
        id: "phys_e1",
        text: "What is the SI unit of force?",
        options: ["Newton", "Joule", "Watt", "Pascal"],
        correctAnswer: "Newton",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e2",
        text: "Which law of motion states that 'For every action, there is an equal and opposite reaction'?",
        options: ["First law", "Second law", "Third law", "Fourth law"],
        correctAnswer: "Third law",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e3",
        text: "What is the SI unit of electric current?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        correctAnswer: "Ampere",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e4",
        text: "Which of these is NOT a state of matter?",
        options: ["Solid", "Liquid", "Gas", "Energy"],
        correctAnswer: "Energy",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e5",
        text: "What does a light year measure?",
        options: ["Time", "Distance", "Brightness", "Weight"],
        correctAnswer: "Distance",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e6",
        text: "Which color of light has the highest frequency?",
        options: ["Red", "Blue", "Green", "Violet"],
        correctAnswer: "Violet",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e7",
        text: "What is the SI unit of temperature?",
        options: ["Fahrenheit", "Celsius", "Kelvin", "Rankine"],
        correctAnswer: "Kelvin",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e8",
        text: "Which of these is a vector quantity?",
        options: ["Mass", "Time", "Velocity", "Temperature"],
        correctAnswer: "Velocity",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e9",
        text: "What is the acceleration due to gravity on Earth?",
        options: ["9.8 m/s²", "6.67 m/s²", "3.0 m/s²", "10.0 m/s²"],
        correctAnswer: "9.8 m/s²",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e10",
        text: "Which device is used to measure atmospheric pressure?",
        options: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
        correctAnswer: "Barometer",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e11",
        text: "What type of energy is stored in a battery?",
        options: ["Mechanical", "Thermal", "Chemical", "Nuclear"],
        correctAnswer: "Chemical",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e12",
        text: "Which mirror is used as a rear-view mirror in vehicles?",
        options: ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
        correctAnswer: "Convex mirror",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e13",
        text: "What is the speed of sound in air at room temperature?",
        options: ["330 m/s", "343 m/s", "300,000 m/s", "500 m/s"],
        correctAnswer: "343 m/s",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e14",
        text: "Which of these is NOT a type of electromagnetic wave?",
        options: ["Radio waves", "Sound waves", "X-rays", "Gamma rays"],
        correctAnswer: "Sound waves",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e15",
        text: "What is the SI unit of power?",
        options: ["Joule", "Watt", "Volt", "Ampere"],
        correctAnswer: "Watt",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e16",
        text: "Which law states that pressure and volume are inversely proportional at constant temperature?",
        options: ["Charles's law", "Boyle's law", "Gay-Lussac's law", "Avogadro's law"],
        correctAnswer: "Boyle's law",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e17",
        text: "What is the bending of light as it passes from one medium to another called?",
        options: ["Reflection", "Refraction", "Diffraction", "Dispersion"],
        correctAnswer: "Refraction",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e18",
        text: "Which planet has the strongest gravitational pull in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e19",
        text: "What is the SI unit of electric charge?",
        options: ["Ampere", "Volt", "Coulomb", "Ohm"],
        correctAnswer: "Coulomb",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e20",
        text: "Which type of lens is used to correct nearsightedness?",
        options: ["Convex lens", "Concave lens", "Plano-convex lens", "Bifocal lens"],
        correctAnswer: "Concave lens",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e21",
        text: "What is the energy of motion called?",
        options: ["Potential energy", "Kinetic energy", "Thermal energy", "Chemical energy"],
        correctAnswer: "Kinetic energy",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e22",
        text: "Which scientist is known for the theory of universal gravitation?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        correctAnswer: "Isaac Newton",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e23",
        text: "What is the resistance of an ideal conductor?",
        options: ["Infinite", "Zero", "Depends on temperature", "1 ohm"],
        correctAnswer: "Zero",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e24",
        text: "Which of these is NOT a fundamental force of nature?",
        options: ["Gravitational force", "Electromagnetic force", "Nuclear force", "Frictional force"],
        correctAnswer: "Frictional force",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e25",
        text: "What is the speed of light in a vacuum?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
        correctAnswer: "300,000 km/s",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e26",
        text: "Which device converts mechanical energy into electrical energy?",
        options: ["Motor", "Generator", "Transformer", "Battery"],
        correctAnswer: "Generator",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e27",
        text: "What is the SI unit of frequency?",
        options: ["Hertz", "Decibel", "Watt", "Ohm"],
        correctAnswer: "Hertz",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e28",
        text: "Which law states that energy cannot be created or destroyed?",
        options: ["First law of thermodynamics", "Second law of thermodynamics", "Third law of thermodynamics", "Law of conservation of energy"],
        correctAnswer: "Law of conservation of energy",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e29",
        text: "What is the process by which a liquid turns into a gas at its boiling point?",
        options: ["Evaporation", "Condensation", "Vaporization", "Sublimation"],
        correctAnswer: "Vaporization",
        difficulty: "easy",
        topic: "physics"
      },
      {
        id: "phys_e30",
        text: "Which of these materials is the best conductor of electricity?",
        options: ["Rubber", "Wood", "Copper", "Glass"],
        correctAnswer: "Copper",
        difficulty: "easy",
        topic: "physics"
      }
    ],
    medium: [
      {
        id: "phys_m1",
        text: "What is the formula for kinetic energy?",
        options: ["KE = mgh", "KE = mv", "KE = 0.5mv²", "KE = ma"],
        correctAnswer: "KE = 0.5mv²",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m2",
        text: "Which scientist formulated the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Galileo Galilei"],
        correctAnswer: "Albert Einstein",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m3",
        text: "What is the SI unit of electrical resistance?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        correctAnswer: "Ohm",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m4",
        text: "What is the work done when a force of 10 N moves an object 5 meters?",
        options: ["2 J", "5 J", "10 J", "50 J"],
        correctAnswer: "50 J",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m5",
        text: "Which of these electromagnetic waves has the longest wavelength?",
        options: ["Radio waves", "Microwaves", "X-rays", "Gamma rays"],
        correctAnswer: "Radio waves",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m6",
        text: "What is the principle behind hydraulic brakes?",
        options: ["Bernoulli's principle", "Pascal's principle", "Archimedes' principle", "Newton's third law"],
        correctAnswer: "Pascal's principle",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m7",
        text: "Which of these is an example of simple harmonic motion?",
        options: ["A car moving at constant speed", "A pendulum swinging", "A ball rolling down a hill", "A rocket launching"],
        correctAnswer: "A pendulum swinging",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m8",
        text: "What is the efficiency of a machine that outputs 80 J of work for every 100 J of input?",
        options: ["80%", "100%", "125%", "20%"],
        correctAnswer: "80%",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m9",
        text: "Which law explains why a rocket moves forward when gases are expelled backward?",
        options: ["Newton's first law", "Newton's second law", "Newton's third law", "Law of conservation of energy"],
        correctAnswer: "Newton's third law",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m10",
        text: "What happens to the resistance of a conductor when its temperature increases?",
        options: ["Increases", "Decreases", "Remains constant", "First increases then decreases"],
        correctAnswer: "Increases",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m11",
        text: "Which phenomenon explains the splitting of white light into different colors?",
        options: ["Reflection", "Refraction", "Dispersion", "Diffraction"],
        correctAnswer: "Dispersion",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m12",
        text: "What is the equivalent resistance of two 10Ω resistors in parallel?",
        options: ["5Ω", "10Ω", "20Ω", "100Ω"],
        correctAnswer: "5Ω",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m13",
        text: "Which of these is NOT a unit of energy?",
        options: ["Joule", "Watt-hour", "Calorie", "Pascal"],
        correctAnswer: "Pascal",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m14",
        text: "What is the power consumed by a 100W bulb in 10 hours?",
        options: ["0.1 kWh", "1 kWh", "10 kWh", "100 kWh"],
        correctAnswer: "1 kWh",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m15",
        text: "Which of these is an example of nuclear fusion?",
        options: ["Burning coal", "Nuclear power plant", "The Sun's energy production", "Battery operation"],
        correctAnswer: "The Sun's energy production",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m16",
        text: "What is the focal length of a lens that has a power of +2 diopters?",
        options: ["0.5 m", "1 m", "2 m", "4 m"],
        correctAnswer: "0.5 m",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m17",
        text: "Which principle explains why ships float?",
        options: ["Bernoulli's principle", "Pascal's principle", "Archimedes' principle", "Hooke's law"],
        correctAnswer: "Archimedes' principle",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m18",
        text: "What is the voltage across a 5Ω resistor carrying 2A current?",
        options: ["2.5 V", "5 V", "10 V", "20 V"],
        correctAnswer: "10 V",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m19",
        text: "Which of these is NOT a conservative force?",
        options: ["Gravitational force", "Electrostatic force", "Frictional force", "Elastic spring force"],
        correctAnswer: "Frictional force",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m20",
        text: "What is the angular momentum of a rotating object conserved in the absence of?",
        options: ["Mass", "Energy", "Torque", "Velocity"],
        correctAnswer: "Torque",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m21",
        text: "Which law relates the pressure and volume of a gas at constant temperature?",
        options: ["Charles's law", "Boyle's law", "Gay-Lussac's law", "Avogadro's law"],
        correctAnswer: "Boyle's law",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m22",
        text: "What is the critical angle for total internal reflection?",
        options: ["0°", "45°", "90°", "Depends on the medium"],
        correctAnswer: "Depends on the medium",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m23",
        text: "Which of these particles has the smallest mass?",
        options: ["Proton", "Neutron", "Electron", "Neutrino"],
        correctAnswer: "Neutrino",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m24",
        text: "What is the efficiency of an ideal machine?",
        options: ["0%", "50%", "100%", "Depends on the input"],
        correctAnswer: "100%",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m25",
        text: "Which phenomenon explains the blue color of the sky?",
        options: ["Reflection", "Refraction", "Scattering", "Dispersion"],
        correctAnswer: "Scattering",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m26",
        text: "What is the power factor of a purely resistive AC circuit?",
        options: ["0", "0.5", "1", "Depends on frequency"],
        correctAnswer: "1",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m27",
        text: "Which of these is NOT a type of radioactive decay?",
        options: ["Alpha decay", "Beta decay", "Gamma decay", "Omega decay"],
        correctAnswer: "Omega decay",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m28",
        text: "What is the time period of a simple pendulum of length 1m on Earth?",
        options: ["1 s", "2 s", "3 s", "4 s"],
        correctAnswer: "2 s",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m29",
        text: "Which law explains the relationship between current, voltage and resistance?",
        options: ["Ohm's law", "Faraday's law", "Lenz's law", "Coulomb's law"],
        correctAnswer: "Ohm's law",
        difficulty: "medium",
        topic: "physics"
      },
      {
        id: "phys_m30",
        text: "What is the energy stored in a capacitor proportional to?",
        options: ["Voltage", "Square of voltage", "Current", "Resistance"],
        correctAnswer: "Square of voltage",
        difficulty: "medium",
        topic: "physics"
      }
    ],
    hard: [
      {
        id: "phys_h1",
        text: "In quantum mechanics, what is the Heisenberg Uncertainty Principle?",
        options: [
          "Energy can be converted but not created or destroyed", 
          "It's impossible to determine both position and momentum of a particle with absolute precision",
          "Every action has an equal and opposite reaction",
          "Matter can neither be created nor destroyed"
        ],
        correctAnswer: "It's impossible to determine both position and momentum of a particle with absolute precision",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h2",
        text: "What is the value of the gravitational constant (G)?",
        options: [
          "6.67 × 10^-11 N⋅m²/kg²", 
          "9.8 m/s²", 
          "3.0 × 10^8 m/s", 
          "6.02 × 10^23 mol^-1"
        ],
        correctAnswer: "6.67 × 10^-11 N⋅m²/kg²",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h3",
        text: "Which principle states that it's impossible to cool a system to absolute zero in a finite number of steps?",
        options: ["First law of thermodynamics", "Second law of thermodynamics", "Third law of thermodynamics", "Zeroth law of thermodynamics"],
        correctAnswer: "Third law of thermodynamics",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h4",
        text: "What is the rest mass energy of an electron?",
        options: ["0.511 MeV", "1.022 MeV", "938 MeV", "0 MeV"],
        correctAnswer: "0.511 MeV",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h5",
        text: "Which phenomenon is responsible for the quantization of atomic energy levels?",
        options: ["Wave-particle duality", "Pauli exclusion principle", "Heisenberg uncertainty principle", "Schrödinger's equation"],
        correctAnswer: "Wave-particle duality",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h6",
        text: "What is the ratio of specific heats (γ) for a diatomic ideal gas?",
        options: ["1.33", "1.40", "1.67", "2.00"],
        correctAnswer: "1.40",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h7",
        text: "Which of these is NOT a fundamental particle in the Standard Model?",
        options: ["Quark", "Lepton", "Boson", "Hadron"],
        correctAnswer: "Hadron",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h8",
        text: "What is the wavelength of a photon with energy 1 eV?",
        options: ["1240 nm", "2480 nm", "620 nm", "310 nm"],
        correctAnswer: "1240 nm",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h9",
        text: "Which theorem relates the flux of a vector field through a closed surface to the divergence of the field?",
        options: ["Stokes' theorem", "Gauss's theorem", "Green's theorem", "Helmholtz theorem"],
        correctAnswer: "Gauss's theorem",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h10",
        text: "What is the degeneracy pressure that prevents white dwarfs from collapsing?",
        options: ["Electron degeneracy pressure", "Neutron degeneracy pressure", "Proton degeneracy pressure", "Quantum chromodynamic pressure"],
        correctAnswer: "Electron degeneracy pressure",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h11",
        text: "Which of these is a consequence of the Pauli exclusion principle?",
        options: [
          "Electrons occupy discrete energy levels",
          "No two electrons can have the same quantum state",
          "Energy is quantized in photons",
          "Particles have wave-like properties"
        ],
        correctAnswer: "No two electrons can have the same quantum state",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h12",
        text: "What is the Landé g-factor for an electron?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h13",
        text: "Which of these is NOT a valid solution to the Einstein field equations?",
        options: ["Schwarzschild solution", "Kerr solution", "Dirac solution", "Friedmann-Lemaître-Robertson-Walker solution"],
        correctAnswer: "Dirac solution",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h14",
        text: "What is the critical density of the universe in terms of the Hubble constant H₀?",
        options: ["3H₀²/8πG", "H₀²/8πG", "3H₀²/4πG", "H₀²/4πG"],
        correctAnswer: "3H₀²/8πG",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h15",
        text: "Which quantum number describes the shape of an atomic orbital?",
        options: ["Principal quantum number", "Azimuthal quantum number", "Magnetic quantum number", "Spin quantum number"],
        correctAnswer: "Azimuthal quantum number",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h16",
        text: "What is the approximate ratio of proton mass to electron mass?",
        options: ["1836", "1000", "2000", "500"],
        correctAnswer: "1836",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h17",
        text: "Which phenomenon explains the Lamb shift in hydrogen spectrum?",
        options: ["Vacuum polarization", "Quantum tunneling", "Zeeman effect", "Stark effect"],
        correctAnswer: "Vacuum polarization",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h18",
        text: "What is the dimensionality of spacetime in general relativity?",
        options: ["3", "4", "10", "11"],
        correctAnswer: "4",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h19",
        text: "Which of these is NOT a fundamental interaction in nature?",
        options: ["Gravitational", "Electromagnetic", "Strong nuclear", "Van der Waals"],
        correctAnswer: "Van der Waals",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h20",
        text: "What is the approximate energy of the Lyman-alpha transition in hydrogen?",
        options: ["1.89 eV", "3.40 eV", "10.2 eV", "13.6 eV"],
        correctAnswer: "10.2 eV",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h21",
        text: "Which theorem relates the circulation of a vector field to the flux of its curl?",
        options: ["Divergence theorem", "Stokes' theorem", "Green's theorem", "Helmholtz theorem"],
        correctAnswer: "Stokes' theorem",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h22",
        text: "What is the approximate Schwarzschild radius of the Sun?",
        options: ["3 km", "30 km", "300 km", "3000 km"],
        correctAnswer: "3 km",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h23",
        text: "Which of these particles is its own antiparticle?",
        options: ["Electron", "Proton", "Photon", "Neutron"],
        correctAnswer: "Photon",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h24",
        text: "What is the approximate ratio of strong nuclear force to electromagnetic force at 1 fm?",
        options: ["1", "10", "100", "1000"],
        correctAnswer: "100",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h25",
        text: "Which phenomenon explains the anomalous magnetic moment of the electron?",
        options: ["Quantum electrodynamics", "Quantum chromodynamics", "Electroweak theory", "String theory"],
        correctAnswer: "Quantum electrodynamics",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h26",
        text: "What is the approximate energy density of the cosmic microwave background?",
        options: ["0.26 eV/cm³", "0.26 MeV/cm³", "0.26 GeV/cm³", "0.26 TeV/cm³"],
        correctAnswer: "0.26 eV/cm³",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h27",
        text: "Which of these is NOT a solution to the Dirac equation?",
        options: ["Electron", "Positron", "Photon", "All are solutions"],
        correctAnswer: "Photon",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h28",
        text: "What is the approximate ratio of dark energy to total energy density in the universe?",
        options: ["5%", "27%", "68%", "95%"],
        correctAnswer: "68%",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h29",
        text: "Which phenomenon is responsible for the decay of a free neutron?",
        options: ["Strong interaction", "Weak interaction", "Electromagnetic interaction", "Gravitational interaction"],
        correctAnswer: "Weak interaction",
        difficulty: "hard",
        topic: "physics"
      },
      {
        id: "phys_h30",
        text: "What is the approximate temperature of the Sun's core?",
        options: ["1 million K", "10 million K", "15 million K", "100 million K"],
        correctAnswer: "15 million K",
        difficulty: "hard",
        topic: "physics"
      }
    ]
  },
  chemistry: {
    easy: [
      {
        id: "chem_e1",
        text: "What is the chemical symbol for gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correctAnswer: "Au",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e2",
        text: "What is the pH value of pure water?",
        options: ["0", "7", "14", "10"],
        correctAnswer: "7",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e3",
        text: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon dioxide",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e4",
        text: "What is the chemical symbol for sodium?",
        options: ["So", "Sd", "Na", "No"],
        correctAnswer: "Na",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e5",
        text: "Which of these is NOT a noble gas?",
        options: ["Helium", "Neon", "Argon", "Chlorine"],
        correctAnswer: "Chlorine",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e6",
        text: "What is the main component of natural gas?",
        options: ["Methane", "Ethane", "Propane", "Butane"],
        correctAnswer: "Methane",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e7",
        text: "Which metal is liquid at room temperature?",
        options: ["Sodium", "Mercury", "Iron", "Aluminum"],
        correctAnswer: "Mercury",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e8",
        text: "What is the chemical formula for table salt?",
        options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
        correctAnswer: "NaCl",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e9",
        text: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Lithium", "Oxygen"],
        correctAnswer: "Hydrogen",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e10",
        text: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "NH3", "CH4"],
        correctAnswer: "H2O",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e11",
        text: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
        correctAnswer: "Nitrogen",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e12",
        text: "What is the chemical symbol for iron?",
        options: ["Ir", "Fe", "In", "I"],
        correctAnswer: "Fe",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e13",
        text: "Which of these is an alkali metal?",
        options: ["Magnesium", "Calcium", "Sodium", "Aluminum"],
        correctAnswer: "Sodium",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e14",
        text: "What is the chemical formula for carbon dioxide?",
        options: ["CO", "CO2", "C2O", "C2O2"],
        correctAnswer: "CO2",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e15",
        text: "Which of these is NOT a state of matter?",
        options: ["Solid", "Liquid", "Gas", "Energy"],
        correctAnswer: "Energy",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e16",
        text: "What is the chemical symbol for potassium?",
        options: ["Po", "Pt", "K", "Ko"],
        correctAnswer: "K",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e17",
        text: "Which of these is a halogen?",
        options: ["Sodium", "Chlorine", "Calcium", "Magnesium"],
        correctAnswer: "Chlorine",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e18",
        text: "What is the chemical formula for methane?",
        options: ["CH4", "C2H6", "C3H8", "C4H10"],
        correctAnswer: "CH4",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e19",
        text: "Which of these is a transition metal?",
        options: ["Sodium", "Calcium", "Iron", "Aluminum"],
        correctAnswer: "Iron",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e20",
        text: "What is the chemical symbol for silver?",
        options: ["Si", "Sv", "Ag", "Au"],
        correctAnswer: "Ag",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e21",
        text: "Which of these is a greenhouse gas?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
        correctAnswer: "Carbon dioxide",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e22",
        text: "What is the chemical formula for ammonia?",
        options: ["NH3", "NO2", "N2O", "HNO3"],
        correctAnswer: "NH3",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e23",
        text: "Which element is the most abundant in the human body by mass?",
        options: ["Carbon", "Hydrogen", "Oxygen", "Nitrogen"],
        correctAnswer: "Oxygen",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e24",
        text: "What is the chemical symbol for lead?",
        options: ["Le", "Ld", "Pb", "Pl"],
        correctAnswer: "Pb",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e25",
        text: "Which of these is a property of acids?",
        options: ["Taste bitter", "Feel slippery", "Turn litmus red", "pH greater than 7"],
        correctAnswer: "Turn litmus red",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e26",
        text: "What is the chemical formula for hydrogen peroxide?",
        options: ["H2O", "HO", "H2O2", "H3O"],
        correctAnswer: "H2O2",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e27",
        text: "Which of these is a property of bases?",
        options: ["Taste sour", "Turn litmus red", "Feel slippery", "pH less than 7"],
        correctAnswer: "Feel slippery",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e28",
        text: "What is the chemical symbol for copper?",
        options: ["Co", "Cp", "Cu", "Cr"],
        correctAnswer: "Cu",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e29",
        text: "Which of these is NOT a pure substance?",
        options: ["Element", "Compound", "Mixture", "All are pure substances"],
        correctAnswer: "Mixture",
        difficulty: "easy",
        topic: "chemistry"
      },
      {
        id: "chem_e30",
        text: "What is the chemical formula for glucose?",
        options: ["C6H12O6", "C12H22O11", "CH4", "CO2"],
        correctAnswer: "C6H12O6",
        difficulty: "easy",
        topic: "chemistry"
      }
    ],
    medium: [
      {
        id: "chem_m1",
        text: "What is the chemical formula for sulfuric acid?",
        options: ["H2SO3", "H2SO4", "HSO4", "H2S2O7"],
        correctAnswer: "H2SO4",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m2",
        text: "Which element has the highest electronegativity?",
        options: ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
        correctAnswer: "Fluorine",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m3",
        text: "What is the chemical name for baking soda?",
        options: ["Sodium chloride", "Sodium carbonate", "Sodium bicarbonate", "Sodium hydroxide"],
        correctAnswer: "Sodium bicarbonate",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m4",
        text: "Which of these is NOT a type of chemical bond?",
        options: ["Ionic", "Covalent", "Metallic", "Nuclear"],
        correctAnswer: "Nuclear",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m5",
        text: "What is the oxidation state of oxygen in most compounds?",
        options: ["-2", "-1", "+1", "+2"],
        correctAnswer: "-2",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m6",
        text: "Which of these is a strong acid?",
        options: ["Acetic acid", "Citric acid", "Hydrochloric acid", "Carbonic acid"],
        correctAnswer: "Hydrochloric acid",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m7",
        text: "What is the chemical formula for calcium carbonate?",
        options: ["CaCO3", "Ca2CO3", "Ca(CO3)2", "CaC2O4"],
        correctAnswer: "CaCO3",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m8",
        text: "Which law states that the volume of a gas is directly proportional to its temperature at constant pressure?",
        options: ["Boyle's law", "Charles's law", "Gay-Lussac's law", "Avogadro's law"],
        correctAnswer: "Charles's law",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m9",
        text: "What is the chemical name for vinegar?",
        options: ["Acetic acid", "Citric acid", "Hydrochloric acid", "Sulfuric acid"],
        correctAnswer: "Acetic acid",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m10",
        text: "Which of these is NOT a type of chemical reaction?",
        options: ["Synthesis", "Decomposition", "Combustion", "Oscillation"],
        correctAnswer: "Oscillation",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m11",
        text: "What is the pH of a 0.01 M HCl solution?",
        options: ["1", "2", "7", "14"],
        correctAnswer: "2",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m12",
        text: "Which of these is a characteristic of transition metals?",
        options: ["Form colored compounds", "Have low melting points", "Are poor conductors of electricity", "Are always diamagnetic"],
        correctAnswer: "Form colored compounds",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m13",
        text: "What is the chemical formula for aluminum oxide?",
        options: ["AlO", "Al2O", "AlO2", "Al2O3"],
        correctAnswer: "Al2O3",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m14",
        text: "Which of these is a property of noble gases?",
        options: ["Highly reactive", "Form many compounds", "Colorless and odorless", "Exist as diatomic molecules"],
        correctAnswer: "Colorless and odorless",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m15",
        text: "What is the chemical name for rust?",
        options: ["Iron oxide", "Iron sulfide", "Iron carbonate", "Iron hydroxide"],
        correctAnswer: "Iron oxide",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m16",
        text: "Which of these is NOT a colligative property?",
        options: ["Boiling point elevation", "Freezing point depression", "Osmotic pressure", "Density"],
        correctAnswer: "Density",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m17",
        text: "What is the chemical formula for magnesium hydroxide?",
        options: ["MgO", "MgH", "Mg(OH)2", "Mg2OH"],
        correctAnswer: "Mg(OH)2",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m18",
        text: "Which law states that the total pressure of a gas mixture is equal to the sum of the partial pressures?",
        options: ["Boyle's law", "Charles's law", "Dalton's law", "Henry's law"],
        correctAnswer: "Dalton's law",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m19",
        text: "What is the chemical name for laughing gas?",
        options: ["Nitrogen dioxide", "Nitrous oxide", "Nitric oxide", "Ammonia"],
        correctAnswer: "Nitrous oxide",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m20",
        text: "Which of these is a characteristic of an exothermic reaction?",
        options: ["Absorbs heat", "Feels cold", "Releases heat", "Requires continuous energy input"],
        correctAnswer: "Releases heat",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m21",
        text: "What is the chemical formula for potassium permanganate?",
        options: ["KMnO4", "K2MnO4", "K(MnO4)2", "K3MnO4"],
        correctAnswer: "KMnO4",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m22",
        text: "Which of these is NOT a type of isomerism?",
        options: ["Structural", "Geometric", "Optical", "Nuclear"],
        correctAnswer: "Nuclear",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m23",
        text: "What is the chemical name for quicklime?",
        options: ["Calcium carbonate", "Calcium oxide", "Calcium hydroxide", "Calcium sulfate"],
        correctAnswer: "Calcium oxide",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m24",
        text: "Which of these is a characteristic of a catalyst?",
        options: ["Increases activation energy", "Is consumed in the reaction", "Changes the equilibrium position", "Increases reaction rate"],
        correctAnswer: "Increases reaction rate",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m25",
        text: "What is the chemical formula for sodium hydroxide?",
        options: ["NaO", "NaOH", "Na(OH)2", "Na2O"],
        correctAnswer: "NaOH",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m26",
        text: "Which of these is NOT a type of radioactive decay?",
        options: ["Alpha", "Beta", "Gamma", "Omega"],
        correctAnswer: "Omega",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m27",
        text: "What is the chemical name for table sugar?",
        options: ["Glucose", "Fructose", "Sucrose", "Lactose"],
        correctAnswer: "Sucrose",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m28",
        text: "Which of these is a property of transition metals?",
        options: ["Form only ionic compounds", "Have fixed oxidation states", "Act as catalysts", "Are always diamagnetic"],
        correctAnswer: "Act as catalysts",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m29",
        text: "What is the chemical formula for nitric acid?",
        options: ["HNO2", "HNO3", "H2NO3", "H3NO3"],
        correctAnswer: "HNO3",
        difficulty: "medium",
        topic: "chemistry"
      },
      {
        id: "chem_m30",
        text: "Which of these is NOT a property of water?",
        options: ["High specific heat", "Low surface tension", "Universal solvent", "High heat of vaporization"],
        correctAnswer: "Low surface tension",
        difficulty: "medium",
        topic: "chemistry"
      }
    ],
    hard: [
      {
        id: "chem_h1",
        text: "What is the hybridization of carbon in benzene?",
        options: ["sp", "sp²", "sp³", "sp³d"],
        correctAnswer: "sp²",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h2",
        text: "Which of these is NOT a noble gas?",
        options: ["Neon", "Argon", "Krypton", "Nitrogen"],
        correctAnswer: "Nitrogen",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h3",
        text: "What is the IUPAC name for CH₃CH₂COOH?",
        options: ["Propanoic acid", "Ethanoic acid", "Butanoic acid", "Methanoic acid"],
        correctAnswer: "Propanoic acid",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h4",
        text: "Which quantum number describes the shape of an orbital?",
        options: ["Principal", "Azimuthal", "Magnetic", "Spin"],
        correctAnswer: "Azimuthal",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h5",
        text: "What is the coordination number in a face-centered cubic structure?",
        options: ["4", "6", "8", "12"],
        correctAnswer: "12",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h6",
        text: "Which of these is NOT a thermodynamic potential?",
        options: ["Internal energy", "Enthalpy", "Gibbs free energy", "Kinetic energy"],
        correctAnswer: "Kinetic energy",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h7",
        text: "What is the geometry of an sp³ hybridized carbon atom?",
        options: ["Linear", "Trigonal planar", "Tetrahedral", "Octahedral"],
        correctAnswer: "Tetrahedral",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h8",
        text: "Which of these is NOT a colligative property?",
        options: ["Vapor pressure lowering", "Boiling point elevation", "Freezing point depression", "Density"],
        correctAnswer: "Density",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h9",
        text: "What is the oxidation state of chromium in K₂Cr₂O₇?",
        options: ["+2", "+3", "+6", "+7"],
        correctAnswer: "+6",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h10",
        text: "Which of these is NOT a type of crystal lattice defect?",
        options: ["Schottky", "Frenkel", "Stoichiometric", "Pauli"],
        correctAnswer: "Pauli",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h11",
        text: "What is the IUPAC name for (CH₃)₂CHCH₂CH₃?",
        options: ["2-methylbutane", "3-methylbutane", "Isopentane", "Neopentane"],
        correctAnswer: "2-methylbutane",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h12",
        text: "Which of these is NOT a postulate of the kinetic theory of gases?",
        options: [
          "Gas particles are in constant random motion",
          "Gas particles have negligible volume",
          "Gas particles attract each other strongly",
          "Collisions between particles are perfectly elastic"
        ],
        correctAnswer: "Gas particles attract each other strongly",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h13",
        text: "What is the coordination number in a body-centered cubic structure?",
        options: ["4", "6", "8", "12"],
        correctAnswer: "8",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h14",
        text: "Which of these is NOT a type of molecular orbital?",
        options: ["σ", "π", "δ", "φ"],
        correctAnswer: "φ",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h15",
        text: "What is the IUPAC name for CH₃CH=CHCH₃?",
        options: ["1-butene", "2-butene", "Butadiene", "Butyne"],
        correctAnswer: "2-butene",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h16",
        text: "Which of these is NOT a type of polymer?",
        options: ["Thermoplastic", "Thermosetting", "Elastomer", "Metalloid"],
        correctAnswer: "Metalloid",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h17",
        text: "What is the hybridization of the central atom in SF₆?",
        options: ["sp", "sp²", "sp³", "sp³d²"],
        correctAnswer: "sp³d²",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h18",
        text: "Which of these is NOT a type of solid?",
        options: ["Ionic", "Covalent", "Metallic", "Nuclear"],
        correctAnswer: "Nuclear",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h19",
        text: "What is the IUPAC name for CH₃CH₂CH₂OH?",
        options: ["Methanol", "Ethanol", "Propanol", "Butanol"],
        correctAnswer: "Propanol",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h20",
        text: "Which of these is NOT a type of chemical equilibrium?",
        options: ["Homogeneous", "Heterogeneous", "Dynamic", "Static"],
        correctAnswer: "Static",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h21",
        text: "What is the geometry of an sp hybridized carbon atom?",
        options: ["Linear", "Trigonal planar", "Tetrahedral", "Octahedral"],
        correctAnswer: "Linear",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h22",
        text: "Which of these is NOT a type of spectroscopy?",
        options: ["IR", "UV-Vis", "NMR", "PCR"],
        correctAnswer: "PCR",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h23",
        text: "What is the IUPAC name for CH₃COCH₃?",
        options: ["Ethanol", "Propanone", "Butanone", "Ethanal"],
        correctAnswer: "Propanone",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h24",
        text: "Which of these is NOT a type of intermolecular force?",
        options: ["London dispersion", "Dipole-dipole", "Hydrogen bonding", "Covalent bonding"],
        correctAnswer: "Covalent bonding",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h25",
        text: "What is the hybridization of nitrogen in NH₃?",
        options: ["sp", "sp²", "sp³", "sp³d"],
        correctAnswer: "sp³",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h26",
        text: "Which of these is NOT a type of chemical kinetics?",
        options: ["Zero-order", "First-order", "Second-order", "Infinite-order"],
        correctAnswer: "Infinite-order",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h27",
        text: "What is the IUPAC name for C₆H₆?",
        options: ["Cyclohexane", "Benzene", "Hexene", "Hexane"],
        correctAnswer: "Benzene",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h28",
        text: "Which of these is NOT a type of crystal system?",
        options: ["Cubic", "Tetragonal", "Hexagonal", "Circular"],
        correctAnswer: "Circular",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h29",
        text: "What is the hybridization of oxygen in H₂O?",
        options: ["sp", "sp²", "sp³", "sp³d"],
        correctAnswer: "sp³",
        difficulty: "hard",
        topic: "chemistry"
      },
      {
        id: "chem_h30",
        text: "Which of these is NOT a type of chemical analysis?",
        options: ["Qualitative", "Quantitative", "Gravimetric", "Hypothetical"],
        correctAnswer: "Hypothetical",
        difficulty: "hard",
        topic: "chemistry"
      }
    ]
  },
  biology: {
    easy: [
      {
        id: "bio_e1",
        text: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Endoplasmic reticulum", "Golgi apparatus"],
        correctAnswer: "Mitochondria",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e2",
        text: "What substance gives blood its red color?",
        options: ["Hemoglobin", "Plasma", "White blood cells", "Platelets"],
        correctAnswer: "Hemoglobin",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e3",
        text: "Which organ is responsible for producing insulin?",
        options: ["Liver", "Pancreas", "Kidney", "Stomach"],
        correctAnswer: "Pancreas",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e4",
        text: "What is the basic unit of life?",
        options: ["Atom", "Cell", "Molecule", "Organ"],
        correctAnswer: "Cell",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e5",
        text: "Which gas do plants absorb during photosynthesis?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        correctAnswer: "Carbon dioxide",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e6",
        text: "What is the largest organ in the human body?",
        options: ["Liver", "Brain", "Skin", "Heart"],
        correctAnswer: "Skin",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e7",
        text: "Which part of the plant conducts photosynthesis?",
        options: ["Root", "Stem", "Leaf", "Flower"],
        correctAnswer: "Leaf",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e8",
        text: "What is the process by which plants make their own food?",
        options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
        correctAnswer: "Photosynthesis",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e9",
        text: "Which of these is NOT a type of blood cell?",
        options: ["Red blood cell", "White blood cell", "Platelet", "Plasma cell"],
        correctAnswer: "Plasma cell",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e10",
        text: "What is the main function of the respiratory system?",
        options: ["Pump blood", "Digest food", "Exchange gases", "Filter blood"],
        correctAnswer: "Exchange gases",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e11",
        text: "Which of these is a function of the skeletal system?",
        options: ["Produce hormones", "Pump blood", "Provide structure and support", "Digest food"],
        correctAnswer: "Provide structure and support",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e12",
        text: "What is the process by which cells divide to create new cells?",
        options: ["Photosynthesis", "Respiration", "Mitosis", "Osmosis"],
        correctAnswer: "Mitosis",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e13",
        text: "Which of these is NOT a part of the central nervous system?",
        options: ["Brain", "Spinal cord", "Nerves", "All are parts"],
        correctAnswer: "Nerves",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e14",
        text: "What is the function of white blood cells?",
        options: ["Carry oxygen", "Fight infection", "Clot blood", "Store energy"],
        correctAnswer: "Fight infection",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e15",
        text: "Which organ filters waste from the blood?",
        options: ["Liver", "Heart", "Kidney", "Lung"],
        correctAnswer: "Kidney",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e16",
        text: "What is the genetic material found in cells?",
        options: ["Protein", "Carbohydrate", "DNA", "Lipid"],
        correctAnswer: "DNA",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e17",
        text: "Which of these is a function of the circulatory system?",
        options: ["Transport nutrients", "Produce hormones", "Filter air", "Digest food"],
        correctAnswer: "Transport nutrients",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e18",
        text: "What is the process by which plants lose water vapor?",
        options: ["Photosynthesis", "Transpiration", "Respiration", "Fermentation"],
        correctAnswer: "Transpiration",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e19",
        text: "Which of these is NOT a type of muscle tissue?",
        options: ["Skeletal", "Cardiac", "Smooth", "Rough"],
        correctAnswer: "Rough",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e20",
        text: "What is the function of chlorophyll in plants?",
        options: ["Absorb sunlight", "Store water", "Transport nutrients", "Provide structure"],
        correctAnswer: "Absorb sunlight",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e21",
        text: "Which of these is a function of the digestive system?",
        options: ["Pump blood", "Exchange gases", "Break down food", "Filter blood"],
        correctAnswer: "Break down food",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e22",
        text: "What is the main function of the nervous system?",
        options: ["Transport oxygen", "Control body functions", "Digest food", "Produce hormones"],
        correctAnswer: "Control body functions",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e23",
        text: "Which of these is NOT a part of a flower?",
        options: ["Petal", "Stamen", "Pistil", "Phloem"],
        correctAnswer: "Phloem",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e24",
        text: "What is the process by which organisms maintain a stable internal environment?",
        options: ["Photosynthesis", "Homeostasis", "Respiration", "Fermentation"],
        correctAnswer: "Homeostasis",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e25",
        text: "Which of these is NOT a type of symbiotic relationship?",
        options: ["Mutualism", "Commensalism", "Parasitism", "Autotrophism"],
        correctAnswer: "Autotrophism",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e26",
        text: "What is the function of the ribosome in a cell?",
        options: ["Energy production", "Protein synthesis", "Waste removal", "DNA replication"],
        correctAnswer: "Protein synthesis",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e27",
        text: "Which of these is a function of the endocrine system?",
        options: ["Produce hormones", "Pump blood", "Filter blood", "Digest food"],
        correctAnswer: "Produce hormones",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e28",
        text: "What is the process by which plants respond to light?",
        options: ["Phototropism", "Gravitropism", "Thigmotropism", "Hydrotropism"],
        correctAnswer: "Phototropism",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e29",
        text: "Which of these is NOT a kingdom in biological classification?",
        options: ["Animalia", "Plantae", "Fungi", "Bacteria"],
        correctAnswer: "Bacteria",
        difficulty: "easy",
        topic: "biology"
      },
      {
        id: "bio_e30",
        text: "What is the function of the cell membrane?",
        options: ["Control what enters and leaves the cell", "Produce energy", "Store genetic material", "Provide structure"],
        correctAnswer: "Control what enters and leaves the cell",
        difficulty: "easy",
        topic: "biology"
      }
    ],
    medium: [
      {
        id: "bio_m1",
        text: "Which of these is NOT a type of blood cell?",
        options: ["Erythrocytes", "Leukocytes", "Thrombocytes", "Hepatocytes"],
        correctAnswer: "Hepatocytes",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m2",
        text: "What is the process by which plants make their own food?",
        options: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
        correctAnswer: "Photosynthesis",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m3",
        text: "Which hormone regulates blood sugar levels?",
        options: ["Adrenaline", "Estrogen", "Insulin", "Thyroxine"],
        correctAnswer: "Insulin",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m4",
        text: "What is the function of the alveoli in the lungs?",
        options: ["Produce mucus", "Exchange gases", "Pump blood", "Filter air"],
        correctAnswer: "Exchange gases",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m5",
        text: "Which of these is NOT a function of the liver?",
        options: ["Produce bile", "Store glycogen", "Filter blood", "Produce insulin"],
        correctAnswer: "Produce insulin",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m6",
        text: "What is the role of tRNA in protein synthesis?",
        options: ["Carry amino acids", "Form ribosomes", "Carry genetic code", "Unwind DNA"],
        correctAnswer: "Carry amino acids",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m7",
        text: "Which of these is NOT a type of neuron?",
        options: ["Sensory", "Motor", "Interneuron", "Effector"],
        correctAnswer: "Effector",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m8",
        text: "What is the function of the myelin sheath?",
        options: ["Produce neurotransmitters", "Speed up nerve impulses", "Store memories", "Protect the brain"],
        correctAnswer: "Speed up nerve impulses",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m9",
        text: "Which of these is NOT a stage of mitosis?",
        options: ["Prophase", "Metaphase", "Anaphase", "Interphase"],
        correctAnswer: "Interphase",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m10",
        text: "What is the function of the stomata in plants?",
        options: ["Absorb water", "Exchange gases", "Transport nutrients", "Store food"],
        correctAnswer: "Exchange gases",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m11",
        text: "Which of these is NOT a function of the kidney?",
        options: ["Filter blood", "Regulate blood pressure", "Produce urine", "Produce bile"],
        correctAnswer: "Produce bile",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m12",
        text: "What is the role of mRNA in protein synthesis?",
        options: ["Carry amino acids", "Form ribosomes", "Carry genetic code", "Unwind DNA"],
        correctAnswer: "Carry genetic code",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m13",
        text: "Which of these is NOT a type of plant tissue?",
        options: ["Dermal", "Vascular", "Ground", "Neural"],
        correctAnswer: "Neural",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m14",
        text: "What is the function of the corpus callosum?",
        options: ["Connect brain hemispheres", "Control breathing", "Regulate body temperature", "Produce hormones"],
        correctAnswer: "Connect brain hemispheres",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m15",
        text: "Which of these is NOT a function of the skin?",
        options: ["Protection", "Temperature regulation", "Sensation", "Pumping blood"],
        correctAnswer: "Pumping blood",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m16",
        text: "What is the function of the chloroplast in plant cells?",
        options: ["Cellular respiration", "Photosynthesis", "Protein synthesis", "Waste removal"],
        correctAnswer: "Photosynthesis",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m17",
        text: "Which of these is NOT a part of the brainstem?",
        options: ["Medulla oblongata", "Pons", "Midbrain", "Cerebellum"],
        correctAnswer: "Cerebellum",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m18",
        text: "What is the function of the xylem in plants?",
        options: ["Transport water", "Transport food", "Photosynthesis", "Gas exchange"],
        correctAnswer: "Transport water",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m19",
        text: "Which of these is NOT a function of the lymphatic system?",
        options: ["Transport fats", "Immune defense", "Fluid balance", "Oxygen transport"],
        correctAnswer: "Oxygen transport",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m20",
        text: "What is the function of the Golgi apparatus?",
        options: ["Energy production", "Protein modification and packaging", "DNA replication", "Waste digestion"],
        correctAnswer: "Protein modification and packaging",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m21",
        text: "Which of these is NOT a type of RNA?",
        options: ["mRNA", "tRNA", "rRNA", "dRNA"],
        correctAnswer: "dRNA",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m22",
        text: "What is the function of the sinoatrial node?",
        options: ["Filter blood", "Produce insulin", "Initiate heartbeat", "Digest food"],
        correctAnswer: "Initiate heartbeat",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m23",
        text: "Which of these is NOT a function of the skeletal system?",
        options: ["Support", "Movement", "Mineral storage", "Hormone production"],
        correctAnswer: "Hormone production",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m24",
        text: "What is the function of the phloem in plants?",
        options: ["Transport water", "Transport food", "Photosynthesis", "Gas exchange"],
        correctAnswer: "Transport food",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m25",
        text: "Which of these is NOT a function of the hypothalamus?",
        options: ["Regulate body temperature", "Control hunger", "Produce growth hormone", "Regulate sleep cycles"],
        correctAnswer: "Produce growth hormone",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m26",
        text: "What is the function of the lysosome?",
        options: ["Energy production", "Protein synthesis", "Waste digestion", "DNA replication"],
        correctAnswer: "Waste digestion",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m27",
        text: "Which of these is NOT a type of muscle contraction?",
        options: ["Isotonic", "Isometric", "Isokinetic", "Isomorphic"],
        correctAnswer: "Isomorphic",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m28",
        text: "What is the function of the nucleolus?",
        options: ["Produce ribosomes", "Store DNA", "Produce energy", "Package proteins"],
        correctAnswer: "Produce ribosomes",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m29",
        text: "Which of these is NOT a function of the spleen?",
        options: ["Filter blood", "Store platelets", "Produce bile", "Immune function"],
        correctAnswer: "Produce bile",
        difficulty: "medium",
        topic: "biology"
      },
      {
        id: "bio_m30",
        text: "What is the function of the centrosome?",
        options: ["Organize microtubules", "Produce ATP", "Store genetic material", "Synthesize proteins"],
        correctAnswer: "Organize microtubules",
        difficulty: "medium",
        topic: "biology"
      }
    ],
    hard: [
      {
        id: "bio_h1",
        text: "Which organelle is responsible for protein synthesis?",
        options: ["Mitochondria", "Golgi apparatus", "Ribosome", "Lysosome"],
        correctAnswer: "Ribosome",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h2",
        text: "Which of these is NOT a nucleotide found in DNA?",
        options: ["Adenine", "Thymine", "Cytosine", "Uracil"],
        correctAnswer: "Uracil",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h3",
        text: "What is the term for the process where one species evolves to resemble another?",
        options: ["Symbiosis", "Mimicry", "Commensalism", "Mutualism"],
        correctAnswer: "Mimicry",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h4",
        text: "Which of these is NOT a stage of cellular respiration?",
        options: ["Glycolysis", "Krebs cycle", "Electron transport chain", "Calvin cycle"],
        correctAnswer: "Calvin cycle",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h5",
        text: "What is the function of the enzyme helicase?",
        options: ["Unwind DNA", "Synthesize RNA", "Join Okazaki fragments", "Proofread DNA"],
        correctAnswer: "Unwind DNA",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h6",
        text: "Which of these is NOT a type of ecological succession?",
        options: ["Primary", "Secondary", "Tertiary", "All are types"],
        correctAnswer: "Tertiary",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h7",
        text: "What is the Hardy-Weinberg equilibrium used to study?",
        options: ["Population genetics", "Cellular respiration", "Photosynthesis", "Protein synthesis"],
        correctAnswer: "Population genetics",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h8",
        text: "Which of these is NOT a function of the rough endoplasmic reticulum?",
        options: ["Protein synthesis", "Protein folding", "Lipid synthesis", "Protein transport"],
        correctAnswer: "Lipid synthesis",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h9",
        text: "What is the role of RNA polymerase?",
        options: ["Unwind DNA", "Synthesize RNA", "Translate RNA", "Replicate DNA"],
        correctAnswer: "Synthesize RNA",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h10",
        text: "Which of these is NOT a characteristic of cancer cells?",
        options: ["Uncontrolled growth", "Metastasis", "Contact inhibition", "Immortality"],
        correctAnswer: "Contact inhibition",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h11",
        text: "What is the function of the enzyme DNA ligase?",
        options: ["Unwind DNA", "Synthesize RNA", "Join Okazaki fragments", "Proofread DNA"],
        correctAnswer: "Join Okazaki fragments",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h12",
        text: "Which of these is NOT a type of post-transcriptional modification?",
        options: ["5' capping", "3' polyadenylation", "Splicing", "Translation"],
        correctAnswer: "Translation",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h13",
        text: "What is the role of the Shine-Dalgarno sequence?",
        options: ["Initiate transcription", "Initiate translation", "Terminate transcription", "Terminate translation"],
        correctAnswer: "Initiate translation",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h14",
        text: "Which of these is NOT a type of point mutation?",
        options: ["Silent", "Missense", "Nonsense", "Frameshift"],
        correctAnswer: "Frameshift",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h15",
        text: "What is the function of the enzyme topoisomerase?",
        options: ["Unwind DNA", "Relieve supercoiling", "Synthesize RNA", "Proofread DNA"],
        correctAnswer: "Relieve supercoiling",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h16",
        text: "Which of these is NOT a characteristic of prokaryotic cells?",
        options: ["No nucleus", "No membrane-bound organelles", "Circular DNA", "Mitochondria"],
        correctAnswer: "Mitochondria",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h17",
        text: "What is the function of the TATA box?",
        options: ["Initiate transcription", "Initiate translation", "Terminate transcription", "Terminate translation"],
        correctAnswer: "Initiate transcription",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h18",
        text: "Which of these is NOT a type of RNA processing?",
        options: ["5' capping", "3' polyadenylation", "Splicing", "Replication"],
        correctAnswer: "Replication",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h19",
        text: "What is the role of the sigma factor in transcription?",
        options: ["Initiate transcription", "Elongate RNA", "Terminate transcription", "Proofread RNA"],
        correctAnswer: "Initiate transcription",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h20",
        text: "Which of these is NOT a function of the smooth endoplasmic reticulum?",
        options: ["Lipid synthesis", "Detoxification", "Calcium storage", "Protein synthesis"],
        correctAnswer: "Protein synthesis",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h21",
        text: "What is the function of the enzyme primase?",
        options: ["Synthesize RNA primer", "Unwind DNA", "Join Okazaki fragments", "Proofread DNA"],
        correctAnswer: "Synthesize RNA primer",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h22",
        text: "Which of these is NOT a characteristic of meiosis?",
        options: ["Produces gametes", "Reduces chromosome number", "Involves two divisions", "Produces identical cells"],
        correctAnswer: "Produces identical cells",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h23",
        text: "What is the role of the Kozak sequence?",
        options: ["Initiate transcription in prokaryotes", "Initiate translation in eukaryotes", "Terminate transcription", "Terminate translation"],
        correctAnswer: "Initiate translation in eukaryotes",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h24",
        text: "Which of these is NOT a type of chromosomal mutation?",
        options: ["Deletion", "Duplication", "Inversion", "Substitution"],
        correctAnswer: "Substitution",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h25",
        text: "What is the function of the enzyme telomerase?",
        options: ["Unwind DNA", "Add telomere repeats", "Synthesize RNA", "Proofread DNA"],
        correctAnswer: "Add telomere repeats",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h26",
        text: "Which of these is NOT a characteristic of operons?",
        options: ["Found in prokaryotes", "Multiple genes under one promoter", "Common in eukaryotes", "Can be inducible or repressible"],
        correctAnswer: "Common in eukaryotes",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h27",
        text: "What is the role of the poly-A tail in mRNA?",
        options: ["Initiate transcription", "Protect mRNA from degradation", "Terminate transcription", "Initiate translation"],
        correctAnswer: "Protect mRNA from degradation",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h28",
        text: "Which of these is NOT a type of epigenetic modification?",
        options: ["DNA methylation", "Histone acetylation", "Chromatin remodeling", "Base substitution"],
        correctAnswer: "Base substitution",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h29",
        text: "What is the function of the enzyme reverse transcriptase?",
        options: ["Synthesize DNA from RNA", "Synthesize RNA from DNA", "Unwind DNA", "Proofread DNA"],
        correctAnswer: "Synthesize DNA from RNA",
        difficulty: "hard",
        topic: "biology"
      },
      {
        id: "bio_h30",
        text: "Which of these is NOT a characteristic of the genetic code?",
        options: ["Universal", "Degenerate", "Non-overlapping", "Non-redundant"],
        correctAnswer: "Non-redundant",
        difficulty: "hard",
        topic: "biology"
      }
    ]
  },
  programming: {
    easy: [
      {
        id: "prog_e1",
        text: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Machine Learning",
          "Hyper Transfer Markup Language",
          "Hybrid Text Machine Language"
        ],
        correctAnswer: "Hyper Text Markup Language",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e2",
        text: "Which of the following is a JavaScript framework?",
        options: ["Java", "Python", "React", "HTML"],
        correctAnswer: "React",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e3",
        text: "What is the primary use of CSS?",
        options: [
          "To create dynamic content",
          "To style web pages",
          "To handle server requests",
          "To define data structures"
        ],
        correctAnswer: "To style web pages",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e4",
        text: "Which of these is NOT a programming language?",
        options: ["Python", "Java", "HTML", "C++"],
        correctAnswer: "HTML",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e5",
        text: "What is the correct way to declare a variable in JavaScript?",
        options: ["variable x;", "var x;", "x = var;", "declare x;"],
        correctAnswer: "var x;",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e6",
        text: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/*", "#", "--"],
        correctAnswer: "//",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e7",
        text: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Colorful Style Sheets"
        ],
        correctAnswer: "Cascading Style Sheets",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e8",
        text: "Which of these is a JavaScript data type?",
        options: ["Integer", "String", "Float", "All of the above"],
        correctAnswer: "All of the above",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e9",
        text: "What is the correct way to write an IF statement in JavaScript?",
        options: ["if x == 5", "if (x == 5)", "if x = 5", "if {x == 5}"],
        correctAnswer: "if (x == 5)",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e10",
        text: "Which operator is used to concatenate strings in JavaScript?",
        options: ["+", "&", ".", "|"],
        correctAnswer: "+",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e11",
        text: "What is the correct way to create a function in JavaScript?",
        options: [
          "function = myFunction()",
          "function myFunction()",
          "create myFunction()",
          "new function myFunction()"
        ],
        correctAnswer: "function myFunction()",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e12",
        text: "Which of these is NOT a JavaScript loop?",
        options: ["for", "while", "do...while", "repeat...until"],
        correctAnswer: "repeat...until",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e13",
        text: "What does DOM stand for in web development?",
        options: [
          "Data Object Model",
          "Document Object Model",
          "Display Object Model",
          "Dynamic Object Model"
        ],
        correctAnswer: "Document Object Model",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e14",
        text: "Which of these is NOT a valid HTML tag?",
        options: ["<div>", "<span>", "<container>", "<p>"],
        correctAnswer: "<container>",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e15",
        text: "What is the correct way to write a JavaScript array?",
        options: [
          "var colors = (1:'red', 2:'green', 3:'blue')",
          "var colors = ['red', 'green', 'blue']",
          "var colors = 'red', 'green', 'blue'",
          "var colors = {1='red', 2='green', 3='blue'}"
        ],
        correctAnswer: "var colors = ['red', 'green', 'blue']",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e16",
        text: "Which of these is NOT a JavaScript comparison operator?",
        options: ["==", "===", "!=", "<>"],
        correctAnswer: "<>",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e17",
        text: "What is the correct way to include an external JavaScript file?",
        options: [
          "<script href='script.js'>",
          "<script src='script.js'>",
          "<javascript src='script.js'>",
          "<include src='script.js'>"
        ],
        correctAnswer: "<script src='script.js'>",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e18",
        text: "Which of these is NOT a valid CSS selector?",
        options: [".class", "#id", "*element", "tag"],
        correctAnswer: "*element",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e19",
        text: "What is the correct way to write a comment in HTML?",
        options: [
          "<!-- This is a comment -->",
          "// This is a comment",
          "/* This is a comment */",
          "# This is a comment"
        ],
        correctAnswer: "<!-- This is a comment -->",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e20",
        text: "Which of these is NOT a valid JavaScript variable name?",
        options: ["varName", "var_name", "var-name", "varName123"],
        correctAnswer: "var-name",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e21",
        text: "What is the correct way to add a CSS class to an HTML element?",
        options: [
          "<div class='myClass'>",
          "<div className='myClass'>",
          "<div css='myClass'>",
          "<div style='myClass'>"
        ],
        correctAnswer: "<div class='myClass'>",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e22",
        text: "Which of these is NOT a JavaScript logical operator?",
        options: ["&&", "||", "!", "&"],
        correctAnswer: "&",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e23",
        text: "What is the correct way to write a FOR loop in JavaScript?",
        options: [
          "for (i = 0; i < 5; i++)",
          "for (i = 0, i < 5, i++)",
          "for i = 0 to 5",
          "for (i < 5) i++"
        ],
        correctAnswer: "for (i = 0; i < 5; i++)",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e24",
        text: "Which of these is NOT a valid HTML input type?",
        options: ["text", "button", "input", "checkbox"],
        correctAnswer: "input",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e25",
        text: "What is the correct way to write an object in JavaScript?",
        options: [
          "var person = {firstName:'John', lastName:'Doe'}",
          "var person = [firstName:'John', lastName:'Doe']",
          "var person = (firstName='John', lastName='Doe')",
          "var person = {'firstName':'John', 'lastName':'Doe'}"
        ],
        correctAnswer: "var person = {firstName:'John', lastName:'Doe'}",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e26",
        text: "Which of these is NOT a valid JavaScript event?",
        options: ["onclick", "onmouseover", "onload", "onstyle"],
        correctAnswer: "onstyle",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e27",
        text: "What is the correct way to write a WHILE loop in JavaScript?",
        options: [
          "while (i < 5)",
          "while i < 5",
          "while {i < 5}",
          "while [i < 5]"
        ],
        correctAnswer: "while (i < 5)",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e28",
        text: "Which of these is NOT a valid CSS property?",
        options: ["color", "font-size", "text-align", "element-style"],
        correctAnswer: "element-style",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e29",
        text: "What is the correct way to write a JavaScript alert?",
        options: [
          "alert('Hello World');",
          "alertBox('Hello World');",
          "msg('Hello World');",
          "message('Hello World');"
        ],
        correctAnswer: "alert('Hello World');",
        difficulty: "easy",
        topic: "programming"
      },
      {
        id: "prog_e30",
        text: "Which of these is NOT a valid JavaScript method?",
        options: ["toString()", "toUpperCase()", "toNumber()", "toFixed()"],
        correctAnswer: "toNumber()",
        difficulty: "easy",
        topic: "programming"
      }
    ],
    medium: [
      {
        id: "prog_m1",
        text: "What is the correct way to write a JavaScript array?",
        options: [
          "var colors = (1:'red', 2:'green', 3:'blue')",
          "var colors = ['red', 'green', 'blue']",
          "var colors = 'red', 'green', 'blue'",
          "var colors = {1='red', 2='green', 3='blue'}"
        ],
        correctAnswer: "var colors = ['red', 'green', 'blue']",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m2",
        text: "Which of the following is NOT a valid HTTP status code?",
        options: ["200 OK", "404 Not Found", "500 Server Error", "600 Data Error"],
        correctAnswer: "600 Data Error",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m3",
        text: "What is a closure in JavaScript?",
        options: [
          "A function with no return statement",
          "A function that has access to variables in its lexical scope",
          "A function that closes the browser",
          "A method that ends the program execution"
        ],
        correctAnswer: "A function that has access to variables in its lexical scope",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m4",
        text: "Which of these is NOT a JavaScript framework or library?",
        options: ["React", "Angular", "Vue", "Django"],
        correctAnswer: "Django",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m5",
        text: "What is the purpose of the 'use strict' directive in JavaScript?",
        options: [
          "To enforce stricter type checking",
          "To enable a restricted variant of JavaScript",
          "To improve performance",
          "To enable experimental features"
        ],
        correctAnswer: "To enable a restricted variant of JavaScript",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m6",
        text: "Which of these is NOT a valid JavaScript method for arrays?",
        options: ["push()", "pop()", "shift()", "remove()"],
        correctAnswer: "remove()",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m7",
        text: "What is the purpose of the 'this' keyword in JavaScript?",
        options: [
          "Refers to the current function",
          "Refers to the parent object",
          "Refers to the global object",
          "Depends on the execution context"
        ],
        correctAnswer: "Depends on the execution context",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m8",
        text: "Which of these is NOT a valid CSS position property value?",
        options: ["static", "relative", "absolute", "center"],
        correctAnswer: "center",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m9",
        text: "What is the purpose of the 'async' attribute in a script tag?",
        options: [
          "To make the script execute asynchronously",
          "To make the script execute synchronously",
          "To make the script execute only after the page loads",
          "To make the script execute only when called"
        ],
        correctAnswer: "To make the script execute asynchronously",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m10",
        text: "Which of these is NOT a valid JavaScript operator?",
        options: ["===", "!==", "**", "><"],
        correctAnswer: "><",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m11",
        text: "What is the purpose of the 'defer' attribute in a script tag?",
        options: [
          "To defer script execution until after the page loads",
          "To defer script execution until the script is called",
          "To defer script execution until other scripts load",
          "To defer script execution until the user interacts with the page"
        ],
        correctAnswer: "To defer script execution until after the page loads",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m12",
        text: "Which of these is NOT a valid JavaScript data type?",
        options: ["string", "number", "boolean", "character"],
        correctAnswer: "character",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m13",
        text: "What is the purpose of the 'localStorage' object in JavaScript?",
        options: [
          "To store data on the server",
          "To store data locally in the browser",
          "To store session data",
          "To store cookies"
        ],
        correctAnswer: "To store data locally in the browser",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m14",
        text: "Which of these is NOT a valid CSS display property value?",
        options: ["block", "inline", "flex", "visible"],
        correctAnswer: "visible",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m15",
        text: "What is the purpose of the 'fetch' API in JavaScript?",
        options: [
          "To fetch data from a server",
          "To fetch data from local storage",
          "To fetch data from cookies",
          "To fetch data from the DOM"
        ],
        correctAnswer: "To fetch data from a server",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m16",
        text: "Which of these is NOT a valid JavaScript event listener?",
        options: ["click", "mouseover", "keypress", "stylechange"],
        correctAnswer: "stylechange",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m17",
        text: "What is the purpose of the 'map' method in JavaScript?",
        options: [
          "To create a new array by transforming each element",
          "To filter elements from an array",
          "To reduce an array to a single value",
          "To sort elements in an array"
        ],
        correctAnswer: "To create a new array by transforming each element",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m18",
        text: "Which of these is NOT a valid CSS unit?",
        options: ["px", "em", "rem", "dp"],
        correctAnswer: "dp",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m19",
        text: "What is the purpose of the 'reduce' method in JavaScript?",
        options: [
          "To reduce the size of an array",
          "To reduce an array to a single value",
          "To reduce the memory usage of an array",
          "To reduce the number of elements in an array"
        ],
        correctAnswer: "To reduce an array to a single value",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m20",
        text: "Which of these is NOT a valid JavaScript loop?",
        options: ["for...in", "for...of", "for...each", "while"],
        correctAnswer: "for...each",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m21",
        text: "What is the purpose of the 'bind' method in JavaScript?",
        options: [
          "To bind two objects together",
          "To bind an event to an element",
          "To create a new function with a specific 'this' value",
          "To bind a variable to a value"
        ],
        correctAnswer: "To create a new function with a specific 'this' value",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m22",
        text: "Which of these is NOT a valid CSS selector?",
        options: [":hover", ":active", ":click", ":focus"],
        correctAnswer: ":click",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m23",
        text: "What is the purpose of the 'spread' operator in JavaScript?",
        options: [
          "To spread elements of an array or object",
          "To spread CSS styles",
          "To spread HTML elements",
          "To spread event listeners"
        ],
        correctAnswer: "To spread elements of an array or object",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m24",
        text: "Which of these is NOT a valid JavaScript method for strings?",
        options: ["split()", "join()", "slice()", "substring()"],
        correctAnswer: "join()",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m25",
        text: "What is the purpose of the 'querySelector' method in JavaScript?",
        options: [
          "To select the first element matching a CSS selector",
          "To select all elements matching a CSS selector",
          "To query a database",
          "To select elements by their ID"
        ],
        correctAnswer: "To select the first element matching a CSS selector",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m26",
        text: "Which of these is NOT a valid CSS flexbox property?",
        options: ["flex-direction", "flex-wrap", "flex-align", "justify-content"],
        correctAnswer: "flex-align",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m27",
        text: "What is the purpose of the 'classList' property in JavaScript?",
        options: [
          "To list all classes in a document",
          "To manipulate the classes of an element",
          "To create a list of class names",
          "To list all elements with a specific class"
        ],
        correctAnswer: "To manipulate the classes of an element",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m28",
        text: "Which of these is NOT a valid JavaScript method for objects?",
        options: ["keys()", "values()", "entries()", "items()"],
        correctAnswer: "items()",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m29",
        text: "What is the purpose of the 'preventDefault' method in JavaScript?",
        options: [
          "To prevent the default action of an event",
          "To prevent default CSS styles",
          "To prevent default HTML behavior",
          "To prevent default JavaScript errors"
        ],
        correctAnswer: "To prevent the default action of an event",
        difficulty: "medium",
        topic: "programming"
      },
      {
        id: "prog_m30",
        text: "Which of these is NOT a valid CSS grid property?",
        options: ["grid-template-columns", "grid-template-rows", "grid-cell", "grid-gap"],
        correctAnswer: "grid-cell",
        difficulty: "medium",
        topic: "programming"
      }
    ],
    hard: [
      {
        id: "prog_h1",
        text: "What is the output of: console.log(typeof typeof 1);",
        options: ["number", "string", "undefined", "NaN"],
        correctAnswer: "string",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h2",
        text: "Which of the following is NOT a valid way to create a Promise in JavaScript?",
        options: [
          "new Promise((resolve, reject) => {})",
          "Promise.resolve(value)",
          "Promise.create(() => {})",
          "Promise.all([promise1, promise2])"
        ],
        correctAnswer: "Promise.create(() => {})",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h3",
        text: "What is the time complexity of a binary search algorithm?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
        correctAnswer: "O(log n)",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h4",
        text: "What is the output of: console.log(0.1 + 0.2 === 0.3);",
        options: ["true", "false", "undefined", "NaN"],
        correctAnswer: "false",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h5",
        text: "Which of these is NOT a JavaScript design pattern?",
        options: ["Singleton", "Observer", "Factory", "Compiler"],
        correctAnswer: "Compiler",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h6",
        text: "What is the purpose of the 'Symbol' data type in JavaScript?",
        options: [
          "To create unique identifiers",
          "To represent mathematical symbols",
          "To create special characters",
          "To represent currency symbols"
        ],
        correctAnswer: "To create unique identifiers",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h7",
        text: "What is the output of: console.log([] + []);",
        options: ["[]", "[object Object]", "''", "undefined"],
        correctAnswer: "''",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h8",
        text: "Which of these is NOT a JavaScript module system?",
        options: ["CommonJS", "AMD", "UMD", "JMD"],
        correctAnswer: "JMD",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h9",
        text: "What is the purpose of the 'WeakMap' object in JavaScript?",
        options: [
          "To create a map with weak keys",
          "To create a map with weak values",
          "To create a map that can't be modified",
          "To create a map with automatic sorting"
        ],
        correctAnswer: "To create a map with weak keys",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h10",
        text: "What is the output of: console.log(!!'false' == !!'true');",
        options: ["true", "false", "undefined", "NaN"],
        correctAnswer: "true",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h11",
        text: "Which of these is NOT a JavaScript memory leak pattern?",
        options: [
          "Accidental global variables",
          "Forgotten timers or callbacks",
          "Closures",
          "Properly removed event listeners"
        ],
        correctAnswer: "Properly removed event listeners",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h12",
        text: "What is the purpose of the 'Proxy' object in JavaScript?",
        options: [
          "To create a proxy server",
          "To define custom behavior for fundamental operations",
          "To proxy HTTP requests",
          "To create a virtual DOM"
        ],
        correctAnswer: "To define custom behavior for fundamental operations",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h13",
        text: "What is the output of: console.log(1 < 2 < 3); console.log(3 > 2 > 1);",
        options: [
          "true true",
          "true false",
          "false true",
          "false false"
        ],
        correctAnswer: "true false",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h14",
        text: "Which of these is NOT a JavaScript garbage collection algorithm?",
        options: ["Mark-and-sweep", "Reference counting", "Generational collection", "Depth-first search"],
        correctAnswer: "Depth-first search",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h15",
        text: "What is the purpose of the 'Generator' function in JavaScript?",
        options: [
          "To generate random numbers",
          "To generate HTML elements",
          "To generate functions that can be exited and later re-entered",
          "To generate CSS styles"
        ],
        correctAnswer: "To generate functions that can be exited and later re-entered",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h16",
        text: "What is the output of: console.log([] == ![]);",
        options: ["true", "false", "undefined", "NaN"],
        correctAnswer: "true",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h17",
        text: "Which of these is NOT a JavaScript event propagation phase?",
        options: ["Capturing phase", "Target phase", "Bubbling phase", "Propagation phase"],
        correctAnswer: "Propagation phase",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h18",
        text: "What is the purpose of the 'Reflect' object in JavaScript?",
        options: [
          "To reflect on code performance",
          "To provide methods for interceptable JavaScript operations",
          "To create mirror images of objects",
          "To reflect CSS styles"
        ],
        correctAnswer: "To provide methods for interceptable JavaScript operations",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h19",
        text: "What is the output of: console.log(+'1' + +'2');",
        options: ["'12'", "3", "'3'", "NaN"],
        correctAnswer: "3",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h20",
        text: "Which of these is NOT a JavaScript module bundler?",
        options: ["Webpack", "Rollup", "Parcel", "NPM"],
        correctAnswer: "NPM",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h21",
        text: "What is the purpose of the 'Intl' object in JavaScript?",
        options: [
          "To provide internationalization and localization",
          "To handle integers",
          "To create intervals",
          "To manage internal links"
        ],
        correctAnswer: "To provide internationalization and localization",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h22",
        text: "What is the output of: console.log(typeof (() => {}));",
        options: ["function", "object", "undefined", "arrow"],
        correctAnswer: "function",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h23",
        text: "Which of these is NOT a JavaScript testing framework?",
        options: ["Jest", "Mocha", "Jasmine", "Java"],
        correctAnswer: "Java",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h24",
        text: "What is the purpose of the 'Atomics' object in JavaScript?",
        options: [
          "To perform atomic operations on shared memory",
          "To work with atomic elements",
          "To create atomic bombs",
          "To perform atomic CSS operations"
        ],
        correctAnswer: "To perform atomic operations on shared memory",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h25",
        text: "What is the output of: console.log(new Array(3).toString());",
        options: ["[]", "[,,]", "''", "undefined"],
        correctAnswer: ",,",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h26",
        text: "Which of these is NOT a JavaScript optimization technique?",
        options: ["Memoization", "Debouncing", "Throttling", "Overclocking"],
        correctAnswer: "Overclocking",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h27",
        text: "What is the purpose of the 'SharedArrayBuffer' object in JavaScript?",
        options: [
          "To share array buffers between threads",
          "To create shared arrays",
          "To buffer shared data",
          "To share array methods"
        ],
        correctAnswer: "To share array buffers between threads",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h28",
        text: "What is the output of: console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);",
        options: ["true", "false", "undefined", "NaN"],
        correctAnswer: "true",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h29",
        text: "Which of these is NOT a JavaScript Web API?",
        options: ["DOM", "Fetch", "WebSocket", "NodeJS"],
        correctAnswer: "NodeJS",
        difficulty: "hard",
        topic: "programming"
      },
      {
        id: "prog_h30",
        text: "What is the purpose of the 'FinalizationRegistry' in JavaScript?",
        options: [
          "To register final exams",
          "To clean up objects after they're garbage collected",
          "To finalize object properties",
          "To register final states"
        ],
        correctAnswer: "To clean up objects after they're garbage collected",
        difficulty: "hard",
        topic: "programming"
      }
    ]
  },
  gk: {
    easy: [
      {
        id: "gk_e1",
        text: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e2",
        text: "What is the capital of France?",
        options: ["Berlin", "London", "Paris", "Rome"],
        correctAnswer: "Paris",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e3",
        text: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e4",
        text: "Which ocean is the largest?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correctAnswer: "Pacific",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e5",
        text: "What is the largest mammal?",
        options: ["Elephant", "Blue whale", "Giraffe", "Polar bear"],
        correctAnswer: "Blue whale",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e6",
        text: "Which country is home to the kangaroo?",
        options: ["South Africa", "Brazil", "Australia", "India"],
        correctAnswer: "Australia",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e7",
        text: "What is the currency of Japan?",
        options: ["Yuan", "Won", "Yen", "Dollar"],
        correctAnswer: "Yen",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e8",
        text: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        correctAnswer: "Mercury",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e9",
        text: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e10",
        text: "What is the largest continent?",
        options: ["Africa", "North America", "Asia", "Europe"],
        correctAnswer: "Asia",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e11",
        text: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        correctAnswer: "Japan",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e12",
        text: "What is the capital of Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        correctAnswer: "Ottawa",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e13",
        text: "Which animal is known as the 'King of the Jungle'?",
        options: ["Tiger", "Lion", "Elephant", "Gorilla"],
        correctAnswer: "Lion",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e14",
        text: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Neptune"],
        correctAnswer: "Jupiter",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e15",
        text: "Which country hosted the 2016 Summer Olympics?",
        options: ["China", "Brazil", "Russia", "UK"],
        correctAnswer: "Brazil",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e16",
        text: "What is the capital of Spain?",
        options: ["Barcelona", "Madrid", "Seville", "Valencia"],
        correctAnswer: "Madrid",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e17",
        text: "Which famous scientist developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        correctAnswer: "Albert Einstein",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e18",
        text: "What is the currency of the United Kingdom?",
        options: ["Euro", "Dollar", "Pound", "Yen"],
        correctAnswer: "Pound",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e19",
        text: "Which country is the largest by land area?",
        options: ["China", "Canada", "USA", "Russia"],
        correctAnswer: "Russia",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e20",
        text: "What is the capital of Italy?",
        options: ["Venice", "Milan", "Rome", "Florence"],
        correctAnswer: "Rome",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e21",
        text: "Which planet has rings around it?",
        options: ["Mars", "Jupiter", "Saturn", "Uranus"],
        correctAnswer: "Saturn",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e22",
        text: "Who was the first person to walk on the moon?",
        options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"],
        correctAnswer: "Neil Armstrong",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e23",
        text: "What is the capital of Germany?",
        options: ["Munich", "Frankfurt", "Berlin", "Hamburg"],
        correctAnswer: "Berlin",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e24",
        text: "Which country is known as the Land of the Midnight Sun?",
        options: ["Sweden", "Norway", "Finland", "Iceland"],
        correctAnswer: "Norway",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e25",
        text: "What is the largest desert in the world?",
        options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
        correctAnswer: "Antarctic",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e26",
        text: "Which country is home to the Great Pyramid of Giza?",
        options: ["Iraq", "Egypt", "Mexico", "Peru"],
        correctAnswer: "Egypt",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e27",
        text: "What is the capital of China?",
        options: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"],
        correctAnswer: "Beijing",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e28",
        text: "Which planet is known as the Evening Star?",
        options: ["Mars", "Venus", "Mercury", "Jupiter"],
        correctAnswer: "Venus",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e29",
        text: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        correctAnswer: "William Shakespeare",
        difficulty: "easy",
        topic: "gk"
      },
      {
        id: "gk_e30",
        text: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: "Canberra",
        difficulty: "easy",
        topic: "gk"
      }
    ],
    medium: [
      {
        id: "gk_m1",
        text: "Which country is the largest by land area?",
        options: ["United States", "China", "Canada", "Russia"],
        correctAnswer: "Russia",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m2",
        text: "In which year did the Titanic sink?",
        options: ["1910", "1912", "1915", "1918"],
        correctAnswer: "1912",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m3",
        text: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
        correctAnswer: "William Shakespeare",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m4",
        text: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Thailand"],
        correctAnswer: "Japan",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m5",
        text: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        correctAnswer: "Brasília",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m6",
        text: "Which mountain is the highest in the world?",
        options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
        correctAnswer: "Mount Everest",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m7",
        text: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Dorothy Hodgkin"],
        correctAnswer: "Marie Curie",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m8",
        text: "Which country is home to the ancient city of Petra?",
        options: ["Egypt", "Jordan", "Israel", "Syria"],
        correctAnswer: "Jordan",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m9",
        text: "What is the currency of Switzerland?",
        options: ["Euro", "Pound", "Franc", "Krone"],
        correctAnswer: "Franc",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m10",
        text: "Which artist painted 'The Starry Night'?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Salvador Dalí"],
        correctAnswer: "Vincent van Gogh",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m11",
        text: "What is the capital of South Africa?",
        options: ["Cape Town", "Johannesburg", "Pretoria", "All of the above"],
        correctAnswer: "All of the above",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m12",
        text: "Which country has the most natural lakes?",
        options: ["Canada", "Russia", "USA", "Finland"],
        correctAnswer: "Canada",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m13",
        text: "Who invented the telephone?",
        options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
        correctAnswer: "Alexander Graham Bell",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m14",
        text: "Which river is the longest in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correctAnswer: "Nile",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m15",
        text: "What is the capital of New Zealand?",
        options: ["Auckland", "Wellington", "Christchurch", "Queenstown"],
        correctAnswer: "Wellington",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m16",
        text: "Which country has the most time zones?",
        options: ["USA", "Russia", "China", "France"],
        correctAnswer: "France",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m17",
        text: "Who was the first president of the United States?",
        options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
        correctAnswer: "George Washington",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m18",
        text: "Which language has the most native speakers?",
        options: ["English", "Spanish", "Hindi", "Mandarin Chinese"],
        correctAnswer: "Mandarin Chinese",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m19",
        text: "What is the capital of Turkey?",
        options: ["Istanbul", "Ankara", "Izmir", "Antalya"],
        correctAnswer: "Ankara",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m20",
        text: "Which country invented tea?",
        options: ["India", "China", "Japan", "UK"],
        correctAnswer: "China",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m21",
        text: "Who wrote 'War and Peace'?",
        options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Nikolai Gogol"],
        correctAnswer: "Leo Tolstoy",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m22",
        text: "What is the capital of Argentina?",
        options: ["Buenos Aires", "Rio de Janeiro", "Santiago", "Lima"],
        correctAnswer: "Buenos Aires",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m23",
        text: "Which country has the most islands?",
        options: ["Indonesia", "Philippines", "Sweden", "Canada"],
        correctAnswer: "Sweden",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m24",
        text: "Who discovered penicillin?",
        options: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"],
        correctAnswer: "Alexander Fleming",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m25",
        text: "What is the capital of Egypt?",
        options: ["Alexandria", "Cairo", "Luxor", "Giza"],
        correctAnswer: "Cairo",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m26",
        text: "Which country is the largest producer of coffee?",
        options: ["Colombia", "Vietnam", "Brazil", "Ethiopia"],
        correctAnswer: "Brazil",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m27",
        text: "Who painted 'The Last Supper'?",
        options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
        correctAnswer: "Leonardo da Vinci",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m28",
        text: "What is the capital of Thailand?",
        options: ["Phuket", "Chiang Mai", "Bangkok", "Pattaya"],
        correctAnswer: "Bangkok",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m29",
        text: "Which country has the world's longest coastline?",
        options: ["Russia", "Canada", "Australia", "USA"],
        correctAnswer: "Canada",
        difficulty: "medium",
        topic: "gk"
      },
      {
        id: "gk_m30",
        text: "Who was the first female Prime Minister of the UK?",
        options: ["Theresa May", "Margaret Thatcher", "Angela Merkel", "Indira Gandhi"],
        correctAnswer: "Margaret Thatcher",
        difficulty: "medium",
        topic: "gk"
      }
    ],
    hard: [
      {
        id: "gk_h1",
        text: "What is the smallest country in the world by land area?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        correctAnswer: "Vatican City",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h2",
        text: "Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Dorothy Hodgkin"],
        correctAnswer: "Marie Curie",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h3",
        text: "Which element has the atomic number 1?",
        options: ["Helium", "Hydrogen", "Carbon", "Oxygen"],
        correctAnswer: "Hydrogen",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h4",
        text: "Which country has the most official languages?",
        options: ["India", "South Africa", "Zimbabwe", "Bolivia"],
        correctAnswer: "Zimbabwe",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h5",
        text: "Who was the first person to reach the South Pole?",
        options: ["Robert Falcon Scott", "Roald Amundsen", "Ernest Shackleton", "Richard Byrd"],
        correctAnswer: "Roald Amundsen",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h6",
        text: "Which country has the most UNESCO World Heritage Sites?",
        options: ["China", "Italy", "Spain", "France"],
        correctAnswer: "Italy",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h7",
        text: "What is the deepest point in the world's oceans?",
        options: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Tonga Trench"],
        correctAnswer: "Mariana Trench",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h8",
        text: "Who was the first female astronaut?",
        options: ["Sally Ride", "Valentina Tereshkova", "Mae Jemison", "Christa McAuliffe"],
        correctAnswer: "Valentina Tereshkova",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h9",
        text: "Which country has the most volcanoes?",
        options: ["Indonesia", "Japan", "USA", "Chile"],
        correctAnswer: "Indonesia",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h10",
        text: "What is the oldest continuously inhabited city in the world?",
        options: ["Jerusalem", "Damascus", "Athens", "Rome"],
        correctAnswer: "Damascus",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h11",
        text: "Who was the first ruler of the Mongol Empire?",
        options: ["Kublai Khan", "Genghis Khan", "Attila the Hun", "Tamerlane"],
        correctAnswer: "Genghis Khan",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h12",
        text: "Which country has the most border countries?",
        options: ["Russia", "China", "Brazil", "Germany"],
        correctAnswer: "China",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h13",
        text: "What is the largest living structure on Earth?",
        options: ["Amazon Rainforest", "Great Barrier Reef", "Himalayan Mountains", "Sahara Desert"],
        correctAnswer: "Great Barrier Reef",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h14",
        text: "Who was the first female Prime Minister in the world?",
        options: ["Indira Gandhi", "Golda Meir", "Sirimavo Bandaranaike", "Margaret Thatcher"],
        correctAnswer: "Sirimavo Bandaranaike",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h15",
        text: "Which country has the most freshwater resources?",
        options: ["Brazil", "Russia", "Canada", "USA"],
        correctAnswer: "Brazil",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h16",
        text: "What is the oldest university in the world?",
        options: ["University of Bologna", "University of Oxford", "University of Al Quaraouiyine", "University of Paris"],
        correctAnswer: "University of Al Quaraouiyine",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h17",
        text: "Who was the first female Nobel Prize winner?",
        options: ["Marie Curie", "Mother Teresa", "Bertha von Suttner", "Dorothy Crowfoot Hodgkin"],
        correctAnswer: "Marie Curie",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h18",
        text: "Which country has the most Olympic gold medals?",
        options: ["USA", "China", "Russia", "Germany"],
        correctAnswer: "USA",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h19",
        text: "What is the largest bay in the world?",
        options: ["Hudson Bay", "Bay of Bengal", "Chesapeake Bay", "Gulf of Mexico"],
        correctAnswer: "Bay of Bengal",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h20",
        text: "Who was the first female CEO of a Fortune 500 company?",
        options: ["Indra Nooyi", "Katharine Graham", "Ursula Burns", "Sheryl Sandberg"],
        correctAnswer: "Katharine Graham",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h21",
        text: "Which country has the most tornadoes per area?",
        options: ["USA", "Canada", "Bangladesh", "Argentina"],
        correctAnswer: "Bangladesh",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h22",
        text: "What is the largest canyon in the world?",
        options: ["Grand Canyon", "Fish River Canyon", "Yarlung Tsangpo Grand Canyon", "Copper Canyon"],
        correctAnswer: "Yarlung Tsangpo Grand Canyon",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h23",
        text: "Who was the first female Secretary of State of the United States?",
        options: ["Condoleezza Rice", "Madeleine Albright", "Hillary Clinton", "Colin Powell"],
        correctAnswer: "Madeleine Albright",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h24",
        text: "Which country has the most pyramids?",
        options: ["Egypt", "Sudan", "Mexico", "Peru"],
        correctAnswer: "Sudan",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h25",
        text: "What is the largest flower in the world?",
        options: ["Titan arum", "Rafflesia", "Sunflower", "Corpse flower"],
        correctAnswer: "Rafflesia",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h26",
        text: "Who was the first female president in Africa?",
        options: ["Ellen Johnson Sirleaf", "Joyce Banda", "Sahle-Work Zewde", "Ameenah Gurib-Fakim"],
        correctAnswer: "Ellen Johnson Sirleaf",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h27",
        text: "Which country has the most active volcanoes?",
        options: ["Indonesia", "Japan", "USA", "Chile"],
        correctAnswer: "Indonesia",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h28",
        text: "What is the largest desert in Asia?",
        options: ["Gobi Desert", "Thar Desert", "Karakum Desert", "Taklamakan Desert"],
        correctAnswer: "Gobi Desert",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h29",
        text: "Who was the first female astronaut to walk in space?",
        options: ["Sally Ride", "Valentina Tereshkova", "Svetlana Savitskaya", "Kathryn Sullivan"],
        correctAnswer: "Svetlana Savitskaya",
        difficulty: "hard",
        topic: "gk"
      },
      {
        id: "gk_h30",
        text: "Which country has the most tree species?",
        options: ["Brazil", "Colombia", "Indonesia", "China"],
        correctAnswer: "Brazil",
        difficulty: "hard",
        topic: "gk"
      }
    ]
  }
};

export default questionPool;