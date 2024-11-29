# SG Workspace

SG Workspace is a Visual Studio Code extension that allows users to create a batch file for the currently opened workspace in VS Code. This batch file can be used to reopen all the currently open files in the same workspace.

## Features

- Save all the open files in the current VS Code window.
- Generate a `.bat` file that reopens the saved files in the same workspace.
- Supports multiple file types and extensions.

## Requirements

- Visual Studio Code
- Node.js (for extension development)

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
3. Search for **SG Workspace**.
4. Click **Install**.

## Usage

1. Open the files you want to include in your workspace.
2. Run the **Create Workspace Batch File** command from the command palette.
3. Choose the location to save the `.bat` file.
4. Run the generated `.bat` file to reopen your workspace.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
