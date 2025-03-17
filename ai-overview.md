# Will4U AI Video Editor - Adobe Premiere Pro Plugin

This file will be used by LLMs in order to understand the project and its structure.

## Project Overview

This plugin for Adobe Premiere Pro helps users semi-automate the video editing process using AI technologies. The plugin is built using React, TypeScript, and leverages Adobe's UXP (Unified Extensibility Platform) and Premiere Pro APIs to interact with the host application.

## Technology Stack

- **Frontend Framework**: React
- **Programming Language**: TypeScript
- **Adobe APIs**:
  - UXP (Unified Extensibility Platform) - For building the plugin interface
  - Premiere Pro API - For interacting with Premiere Pro features
- **AI Integration**: Used for automated video editing features

## Project Structure

```
will4u-ai-video-editor/
├── node_modules/ - External dependencies
├── public/ - Static assets and entry HTML
├── src/
│   ├── components/ - Reusable UI components (buttons, inputs, etc.)
│   ├── controllers/ - Logic controllers that handle interactions with Premiere Pro API
│   ├── panels/ - View components representing different panels/screens in the plugin
│   ├── types/ - TypeScript type definitions and interfaces
│   ├── utils/ - Helper functions and utility code
│   ├── index.tsx - Main entry point for the application
│   └── styles.css - Global CSS styles
├── package.json - Project dependencies and scripts
├── tsconfig.json - TypeScript configuration
├── manifest.json - Plugin manifest for Adobe UXP
└── README.md - Project documentation
```

## Key Features

- **Silence Trimming**: Automatically detects and removes silent portions from video sequences, streamlining the editing process and improving content pacing
  - Uses audio analysis to identify silent segments in the timeline
  - Configurable threshold for what constitutes "silence"
  - Smart trimming that maintains visual continuity
  - Option to add adjustable padding around cuts to ensure smooth transitions

## Plugin Architecture

The plugin follows a structured architecture adapted to work within Adobe's UXP framework:

1. **Entry Point**: `index.tsx` serves as the main entry point, initializing the React application and mounting it to the DOM provided by UXP

2. **Components**: Located in the `components/` directory, these are reusable UI elements like buttons, sliders, and dialogs that follow a consistent design pattern

3. **Controllers**: Found in the `controllers/` directory, these modules handle the business logic and interactions with the Premiere Pro API. They manage operations like:
   - Sequence manipulation
   - Audio analysis for silence detection
   - Timeline operations

4. **Panels (Views)**: Located in the `panels/` directory, these React components represent different screens or panels in the plugin interface, orchestrating the UI and user workflow

5. **Types**: The `types/` directory contains TypeScript interfaces, type definitions, and enums that provide type safety throughout the application

6. **Utils**: Utility functions in the `utils/` directory handle common operations and helper methods used across the application

## Adobe UXP Integration

The plugin uses Adobe's UXP framework which provides:

- Panel-based UI integration within Premiere Pro
- API access to Premiere Pro's project assets, timeline, and other features
- Persistent storage capabilities
- Communication between the plugin and the host application

## Premiere Pro API Integration

The premierepro module enables the plugin to:

- Access and modify sequences in the active project
- Manipulate timeline clips, tracks, and markers
- Read audio data for silence detection
- Apply effects and transitions
- Work with project assets and media
- Access and modify sequence settings

## AI Implementation

The AI features focus on audio analysis to:

- Detect silent segments in video content
- Analyze audio waveforms to determine silence thresholds
- Make intelligent decisions about which segments to trim

## Development Workflow

1. Development is done using standard React/TypeScript tools
2. The plugin is packaged according to Adobe's UXP plugin format
3. Installation in Premiere Pro is done through Adobe's developer tools or marketplace

## Next Steps

To enhance the plugin functionality, potential areas for development include:

- Adding more AI-driven editing features
- Improving silence detection accuracy
- Batch processing multiple sequences
- Adding visualization for detected silent segments

## Requirements

- Adobe Premiere Pro (compatible version)
- Development environment with Node.js and npm
- Adobe UXP Developer Tool for testing

## Further Documentation

Refer to:

- [Adobe UXP Documentation](https://developer.adobe.com/premiere-pro/uxp/uxp-api/)
- [Adobe Premiere Pro API Documentation](https://developer.adobe.com/premiere-pro/uxp/ppro_reference/)
- [React Documentation](https://reactjs.org/docs)
