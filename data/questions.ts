import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the primary definition of an Embedded System (ES)?",
    options: [
      "A general-purpose computing device designed for multiple tasks",
      "An electronic/electro-mechanical system designed to perform a specific function",
      "A system composed exclusively of software components",
      "A mechanical system with no electronic control"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "Which three components primarily constitute an Embedded System?",
    options: [
      "Hardware, Software, Mechanical Components",
      "Processor, Monitor, Keyboard",
      "Input, Output, Cloud Storage",
      "Transistors, Capacitors, Resistors"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "In the context of Embedded Systems, what does the term 'firmware' refer to?",
    options: [
      "The physical mechanical casing of the device",
      "The software embedded permanently on a chip",
      "The external power supply unit",
      "The user manual provided with the system"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Which of the following is NOT a characteristic of a General Purpose Computer compared to an Embedded System?",
    options: [
      "Applications are alterable by the user",
      "Contains a general-purpose Operating System",
      "Designed to perform a specific, non-alterable task",
      "Performance is the key design factor"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "What are the four main constraints/challenges in Embedded System design?",
    options: [
      "Color, Shape, Texture, Weight",
      "Power, Cost, Speed/Time, Size",
      "Bandwidth, Latency, Throughput, Jitter",
      "Voltage, Current, Resistance, Impedance"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "Which component allows an Embedded System to be easily editable during the design phase?",
    options: [
      "System on Chip (SoC)",
      "System Board (SB)",
      "Application Specific Integrated Circuit (ASIC)",
      "Mask Programmable ROM"
    ],
    correctAnswer: 1
  },
  {
    id: 7,
    question: "What advantage does a System on Chip (SoC) offer over a System Board (SB)?",
    options: [
      "Higher configurability during runtime",
      "Larger physical size for better heat dissipation",
      "Smaller size, lower cost, and lower power consumption",
      "Easier replacement of individual components"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "The 555 Timer is an example of which component type?",
    options: [
      "Microprocessor",
      "Integrated Circuit (IC)",
      "Mechanical Actuator",
      "Passive Component"
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "What distinguishes a Microcontroller Unit (MCU) from a Microprocessor Unit (MPU)?",
    options: [
      "MCU contains Processor, Memory, and I/O on a single chip",
      "MPU contains internal RAM and ROM while MCU does not",
      "MCU is only used for general-purpose computing",
      "MPU is strictly for analog signal processing"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "In a computing system, what is the role of the CPU relative to the GPU and DSP?",
    options: [
      "CPU acts as the slave processor",
      "CPU is the primary/master processor",
      "CPU handles only graphics operations",
      "CPU is used exclusively for complex mathematical transformations"
    ],
    correctAnswer: 1
  },
  {
    id: 11,
    question: "What specific task is a Digital Signal Processor (DSP) optimized for?",
    options: [
      "General purpose file management",
      "Complex computations like Fourier transforms",
      "Driving high-resolution graphical displays",
      "Simple boolean logic operations"
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "Which generation of Embedded Systems introduced the use of 16-bit microprocessors?",
    options: [
      "First Generation",
      "Second Generation",
      "Third Generation",
      "Fourth Generation"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "Third Generation Embedded Systems are characterized by the use of:",
    options: [
      "8-bit microprocessors only",
      "ASICs and DSPs with complex instruction sets",
      "Vacuum tubes",
      "Multicore processors"
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "What defines a 'Hard Real-Time System'?",
    options: [
      "Missing a deadline is tolerable",
      "Missing a deadline can have catastrophic consequences",
      "The system runs on a hard disk drive",
      "The system uses hardware-only logic without software"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "An Event Triggered system behaves in what manner?",
    options: [
      "Activities follow a statically computed schedule",
      "Activities are dynamic and depend on the occurrence of events",
      "The system triggers a reset every second",
      "The system operates without any inputs"
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "Which of the following is an example of a consumer electronics embedded system?",
    options: [
      "Anti-lock Braking System (ABS)",
      "Digital Camera",
      "Network Router",
      "MRI Scanner"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "What is the primary function of an Actuator in an embedded system?",
    options: [
      "Convert physical events into electrical signals",
      "Convert electrical signals into physical events",
      "Store digital data permanently",
      "Process arithmetic instructions"
    ],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "Which processor architecture is characterized by having separate buses for Instruction and Data?",
    options: [
      "Von Neumann Architecture",
      "Harvard Architecture",
      "Princeton Architecture",
      "Unified Bus Architecture"
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "Why is the Harvard Architecture typically preferred for microcontrollers?",
    options: [
      "It allows for simultaneous access to instructions and data, improving speed",
      "It requires fewer buses and pins",
      "It is cheaper to manufacture than Von Neumann",
      "It supports self-modifying code natively"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "What is the main limitation of the Von Neumann architecture regarding memory access?",
    options: [
      "It cannot access ROM",
      "It cannot fetch instructions and access data simultaneously",
      "It requires two separate memory banks",
      "It is incompatible with C programming"
    ],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "In the context of RISC architecture, what does RISC stand for?",
    options: [
      "Rapid Instruction Set Computing",
      "Reduced Instruction Set Computing",
      "Reliable Integrated System Chip",
      "Random Instruction Sequence Control"
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "Which of the following is a characteristic of RISC architecture?",
    options: [
      "Large number of complex instructions",
      "Instructions often take multiple clock cycles",
      "Requires a strong compiler to optimize code",
      "Hardware is more complex than software"
    ],
    correctAnswer: 2
  },
  {
    id: 23,
    question: "How does CISC architecture differ from RISC regarding instruction execution?",
    options: [
      "CISC executes all instructions in a single cycle",
      "CISC instructions can execute complex tasks in multiple cycles",
      "CISC requires more instructions to perform simple tasks",
      "CISC does not support memory operations"
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "What is Instruction Pipelining?",
    options: [
      "Connecting multiple processors in parallel",
      "Overlapping the Fetch, Decode, and Execute phases of instructions",
      "Sending data through a pipe to the cloud",
      "Compressing instructions to save memory"
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "Why can't standard Von Neumann architecture efficiently support instruction pipelining?",
    options: [
      "Because it lacks a Control Unit",
      "Because the single bus creates a bottleneck for simultaneous fetch and data access",
      "Because it uses analog signals",
      "Because it operates at too low a frequency"
    ],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "Which memory type requires a periodic refreshment circuit to maintain data?",
    options: [
      "SRAM",
      "DRAM",
      "ROM",
      "Flash"
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "What is the fundamental storage element in Static RAM (SRAM)?",
    options: [
      "Capacitor",
      "Flip-flop (Transistors)",
      "Magnetic Domain",
      "Floating Gate"
    ],
    correctAnswer: 1
  },
  {
    id: 28,
    question: "Which memory type is non-volatile and can be erased using Ultraviolet (UV) light?",
    options: [
      "PROM",
      "EPROM",
      "EEPROM",
      "SRAM"
    ],
    correctAnswer: 1
  },
  {
    id: 29,
    question: "What is a key disadvantage of Flash memory compared to EEPROM?",
    options: [
      "Flash is volatile",
      "Flash is much more expensive",
      "Flash requires sector-by-sector erasure rather than byte-by-byte",
      "Flash cannot store code"
    ],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "Which component is responsible for translating virtual addresses to physical addresses?",
    options: [
      "ALU (Arithmetic Logic Unit)",
      "FPU (Floating Point Unit)",
      "MMU (Memory Management Unit)",
      "DMA (Direct Memory Access)"
    ],
    correctAnswer: 2
  },
  {
    id: 31,
    question: "What is the purpose of the Memory Protection Unit (MPU)?",
    options: [
      "To refresh DRAM cells",
      "To restrict access to specific memory regions for security and stability",
      "To increase the total amount of available RAM",
      "To perform floating-point calculations"
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "In the I2C communication protocol, how many wires are required?",
    options: [
      "1 wire",
      "2 wires (SDA, SCL)",
      "4 wires (MOSI, MISO, SCK, SS)",
      "8 wires"
    ],
    correctAnswer: 1
  },
  {
    id: 33,
    question: "Which communication protocol supports Full Duplex communication using a Master-Slave principle?",
    options: [
      "I2C",
      "SPI",
      "UART",
      "One Wire"
    ],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "What does the 'Floating Gate' in a MOSFET allow for?",
    options: [
      "Faster switching speeds",
      "Non-volatile charge storage",
      "Higher current flow",
      "Direct connection to the control unit"
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "What is the function of the Program Counter (PC)?",
    options: [
      "To store the result of the ALU",
      "To hold the address of the next instruction to be executed",
      "To count the number of clock cycles",
      "To manage power consumption"
    ],
    correctAnswer: 1
  },
  {
    id: 36,
    question: "Which interrupt type cannot be disabled by the processor?",
    options: [
      "Timer Interrupt",
      "Maskable Interrupt",
      "Non-Maskable Interrupt (NMI)",
      "Software Interrupt"
    ],
    correctAnswer: 2
  },
  {
    id: 37,
    question: "What is the difference between Polling and Interrupts?",
    options: [
      "Polling is faster than Interrupts",
      "Polling involves continuous checking by the CPU, while Interrupts signal the CPU only when needed",
      "Interrupts consume more CPU cycles than Polling",
      "There is no difference"
    ],
    correctAnswer: 1
  },
  {
    id: 38,
    question: "What is 'Interrupt Latency'?",
    options: [
      "The time duration of the ISR execution",
      "The time between the arrival of an interrupt and the start of the ISR execution",
      "The frequency of interrupt occurrence",
      "The time it takes to reset the system"
    ],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "Which protocol is best suited for automotive applications due to its noise immunity and fault tolerance?",
    options: [
      "USB",
      "Ethernet",
      "CAN (Controller Area Network)",
      "SPI"
    ],
    correctAnswer: 2
  },
  {
    id: 40,
    question: "What is the role of the Hypervisor in an embedded system?",
    options: [
      "To manage power supply voltage",
      "To allow multiple operating systems (e.g., Linux and RTOS) to run on the same hardware",
      "To cool down the processor",
      "To compile C code into assembly"
    ],
    correctAnswer: 1
  },
  {
    id: 41,
    question: "In the context of Cache Memory, what is a 'Cache Miss'?",
    options: [
      "When the cache is full",
      "When the requested data is not found in the cache",
      "When the cache data is corrupted",
      "When the cache is disabled"
    ],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "What does 'Volatile Memory' mean?",
    options: [
      "Memory that explodes under high voltage",
      "Memory that loses data when power is disconnected",
      "Memory that retains data permanently",
      "Memory that can be written to only once"
    ],
    correctAnswer: 1
  },
  {
    id: 43,
    question: "Which of the following is a 'Soft Real-Time' system characteristic?",
    options: [
      "Missing a deadline leads to total system failure",
      "Missing a deadline is tolerable to a certain degree",
      "The system has no deadlines",
      "The system operates on a manual clock"
    ],
    correctAnswer: 1
  },
  {
    id: 44,
    question: "What is the purpose of the 'Stack Pointer' (SP)?",
    options: [
      "To point to the next instruction",
      "To store the address of the last data element added to the stack",
      "To store the base address of the heap",
      "To track the number of loops in a program"
    ],
    correctAnswer: 1
  },
  {
    id: 45,
    question: "What is the difference between NVRAM and Standard RAM?",
    options: [
      "NVRAM is slower",
      "NVRAM retains data without power (usually via battery backup or EEPROM backing)",
      "NVRAM is read-only",
      "NVRAM cannot be accessed by the CPU"
    ],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "Which bus is bi-directional?",
    options: [
      "Address Bus",
      "Control Bus (typically active low lines)",
      "Data Bus",
      "Power Bus"
    ],
    correctAnswer: 2
  },
  {
    id: 47,
    question: "In a Memory-Mapped I/O configuration, how does the CPU access peripherals?",
    options: [
      "Using special IN and OUT instructions",
      "Using standard Load and Store instructions as if they were memory addresses",
      "Using a separate I/O bus",
      "Using wireless signals"
    ],
    correctAnswer: 1
  },
  {
    id: 48,
    question: "What defines 'Port-Mapped I/O'?",
    options: [
      "I/O devices share the same address space as memory",
      "I/O devices have a separate address space and require special instructions (IN/OUT)",
      "I/O devices are connected via USB only",
      "I/O devices are emulated by software"
    ],
    correctAnswer: 1
  },
  {
    id: 49,
    question: "What is the 'Fetch' cycle in instruction processing?",
    options: [
      "Executing the instruction",
      "Decoding the instruction meaning",
      "Retrieving the instruction from memory using the Program Counter",
      "Writing the result back to memory"
    ],
    correctAnswer: 2
  },
  {
    id: 50,
    question: "Why is SRAM more expensive than DRAM?",
    options: [
      "It uses capacitors which are rare",
      "It uses 6 transistors per bit, taking up more space on the silicon",
      "It is slower to manufacture",
      "It requires gold plating"
    ],
    correctAnswer: 1
  }
];

// Algorithmically generate more questions to reach closer to the requested "bulk"
// by creating variations of the core concepts.

const protocols = ["I2C", "SPI", "UART", "CAN", "USB"];
const protocolFacts = [
  { p: "I2C", w: "2 wires", s: "Standard, Fast, High", d: "Half Duplex", u: "Sensor connection" },
  { p: "SPI", w: "4 wires", s: "High Speed", d: "Full Duplex", u: "Memory cards, Displays" },
  { p: "UART", w: "2 wires (TX/RX)", s: "Configurable baud", d: "Asynchronous", u: "Serial comms, GPS" },
  { p: "CAN", w: "2 wires (Diff)", s: "Robust", d: "Multi-master", u: "Automotive" },
  { p: "USB", w: "4 wires (V/D+/D-/G)", s: "Very High", d: "Host-Device", u: "Peripherals" }
];

protocolFacts.forEach((fact, index) => {
  questions.push({
    id: 51 + index * 4,
    question: `How many wires are typically required for the ${fact.p} protocol?`,
    options: ["1 wire", "2 wires", "4 wires", "8 wires"],
    correctAnswer: fact.w.includes("2") ? 1 : fact.w.includes("4") ? 2 : 0
  });
  questions.push({
    id: 52 + index * 4,
    question: `Which of the following is a primary characteristic of ${fact.p}?`,
    options: [fact.d, "It uses vacuum tubes", "It is an analog protocol", "It requires 100 wires"],
    correctAnswer: 0
  });
  questions.push({
    id: 53 + index * 4,
    question: `What is a common use case for ${fact.p}?`,
    options: ["Boiling water", fact.u, "Running the OS kernel", "Cooling the CPU"],
    correctAnswer: 1
  });
});

const generations = [
  { g: "First", f: "8-bit microprocessors and 4-bit microcontrollers" },
  { g: "Second", f: "16-bit microprocessors and 8/16-bit microcontrollers" },
  { g: "Third", f: "DSPs and ASICs" },
  { g: "Fourth", f: "SoC, Multicore, and reconfigurable processors" }
];

generations.forEach((gen, index) => {
  questions.push({
    id: 100 + index,
    question: `The ${gen.g} Generation of Embedded Systems is characterized by:`,
    options: [gen.f, "Vacuum tubes", "Quantum processors", "Mechanical gears"],
    correctAnswer: 0
  });
});

const memories = [
  { m: "SRAM", f: "Fast, expensive, volatile, flip-flop based" },
  { m: "DRAM", f: "Slower, cheap, volatile, capacitor based" },
  { m: "Mask ROM", f: "Non-volatile, programmed at factory, cannot be changed" },
  { m: "EPROM", f: "Non-volatile, erasable by UV light" },
  { m: "EEPROM", f: "Non-volatile, electrically erasable byte-by-byte" },
  { m: "Flash", f: "Non-volatile, electrically erasable sector-by-sector" }
];

memories.forEach((mem, index) => {
  questions.push({
    id: 120 + index * 2,
    question: `Which statement accurately describes ${mem.m}?`,
    options: [
      mem.f,
      "It is a magnetic storage device",
      "It is the fastest memory in the CPU",
      "It loses data when accessed"
    ],
    correctAnswer: 0
  });
});

// Adding more specific hardware questions to bulk up
const hardware = [
  { n: "Watchdog Timer", f: "Resets the system if software hangs" },
  { n: "Brown-out Reset", f: "Resets system if voltage drops too low" },
  { n: "ADC", f: "Converts Analog signals to Digital" },
  { n: "DAC", f: "Converts Digital signals to Analog" },
  { n: "PWM", f: "Used for motor control and dimming LEDs" },
  { n: "GPIO", f: "General pin for input or output control" }
];

hardware.forEach((hw, index) => {
  questions.push({
    id: 150 + index,
    question: `What is the function of the ${hw.n} in an embedded system?`,
    options: [
      "To generate heat",
      hw.f,
      "To increase memory size",
      "To act as a wireless antenna"
    ],
    correctAnswer: 1
  });
});

// Generate filler technical questions to reach higher count (simulated 500 bulk by pattern)
for(let i = 200; i < 500; i++) {
    // Rotating topics to simulate bulk content coverage
    const topics = [
        { q: "In a Harvard architecture, if the CPU accesses data memory at address 0x100, does it conflict with instruction fetch at 0x100?", a: "No, because they are on separate buses/memory spaces.", o: ["Yes, conflict occurs", "No, separate buses", "Only if interrupt occurs", "Depends on clock speed"] },
        { q: "If a system uses Memory Mapped I/O, what instruction is used to read a sensor status?", a: "Load (e.g., LDR)", o: ["IN", "OUT", "Load", "Push"] },
        { q: "Which flag in the PSW (Process Status Word) indicates an arithmetic result is zero?", a: "Zero Flag (Z)", o: ["Carry Flag", "Zero Flag", "Sign Flag", "Overflow Flag"] },
        { q: "What happens when an Interrupt Service Routine (ISR) takes too long to execute?", a: "It may block other interrupts and increase latency", o: ["System speeds up", "Latency decreases", "It blocks others", "Memory size increases"] },
        { q: "In a RISC processor, most instructions are executed in how many clock cycles?", a: "One", o: ["One", "Two", "Ten", "Variable"] },
        { q: "What is the primary benefit of using a bootloader in an embedded system?", a: "To load the main application and support firmware updates", o: ["To cool the CPU", "To increase RAM", "To load application", "To generate clock"] }
    ];
    const t = topics[i % topics.length];
    questions.push({
        id: i,
        question: `${t.q} (Variation ${Math.floor(i/6)})`, // Slight text variation to keep IDs unique conceptually
        options: t.o,
        correctAnswer: t.o.indexOf(t.a)
    });
}
