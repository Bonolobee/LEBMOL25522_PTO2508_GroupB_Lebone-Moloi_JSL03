# JSL03 Project: Console-Based Task Manager

## Important Prerequisite
1. **Foundation Check:** This project utilizes the UI and asset structure of the JSL02 solution to ensure a professional and consistent display.
2. **User Stories:** Requirements for array manipulation and filtering have been verified against the student dashboard to ensure all functional goals are met.

## Overview
This project involves the development of a structured task management system. The focus shifts from using simple variables to managing data within a **dynamic array of objects**. Each task is assigned a **unique incremental ID**, and the system enforces a strict limit on new entries. The project emphasizes **array methods**, **looping structures**, and **higher-order functions** like `.filter()`.

## Key Objectives

### Logic & User Interaction
- **Structured Data:** Store all tasks as objects inside an array for organized data management.
- **Task Limit:** Implement a loop that allows exactly **three new tasks** to be added to the board.
- **Unique Identification:** Automatically calculate the ID for new tasks by incrementing the ID of the last item in the array.
- **Validation:** Ensure all status inputs are validated (todo, doing, done) and normalized to lowercase.
- **User Feedback:** Alert the user when the task limit is reached: _"There are enough tasks on your board, please check them in the console."_
- **Data Filtering:** Implement a filter function to extract and display only tasks with the status `"done"`.

## Project Structure

├── index.html          # UI foundation (JSL02 Solution)
├── style.css           # Global styles and Kanban layout
├── scripts.js          # Logic: Array management, Loops, and Filtering
├── assets/             # Branding (logo-light.svg, favicon.svg)
└── README.md           # Project documentationFeatures Implemented

• ✅ Array-Based Storage - Centralized management of tasks using object literals.

• ✅ Incremental ID Logic - Dynamic ID assignment ensuring unique identifiers for every entry.

• ✅ Three-Task Entry Loop - Controlled input flow to manage task board density.

• ✅ Enhanced Validation - Integrated logic to enforce correct status categories and formatting.

• ✅ Console Reporting - Distinct logging for the full task list and a filtered "Completed Tasks" view.

## How to Test

1. Open [index.html](index.html) in your web browser.
2. Follow the browser prompts to enter details for three additional tasks.
3. Observe the mandatory alert message upon completion of the third task.
4. Open the Browser Console (F12) to view:
-The label "--- All Tasks ---" followed by the full array.
-The label "--- Completed Tasks ---" followed by the filtered results.

## Credits
Base UI & Assets: JSL02 Official Solution Files.
Project Brief: CodeSpace JSL03 Curriculum requirements.
Developer: [Lebone Moloi]