# Context
## Project description
This project aims to create a plugin for music production software, where a song or other piece of audio can be remixed using a formula that controls time.
## Problem definition
Existing plugins like Cableguys’ TimeShaper achieve a similar effect, but use a predefined set of points instead of a formula based approach (see image).  This is powerful, but causes a looping effect when playing.

A formula based approach can play forever without a single audible loop (depending on the formula you enter) by using variables and functions like the host BPM, a random number, a sine wave generator and much more.

# Functional requirements
These requirements all work towards the vision of an audio plugin that can remix a song/sample based on a formula.

Must-haves
1. As a musician, i want my sequences to be in sync with the project bpm so it does not go off-beat.
2. As a music producer i want to be able to drag and drop samples into the plugin window so i can quickly replace the sample i am using.
3. As a musician, i want to be able to write a formula that controls the playback of the sample so i can create complex and non looping sequences.
Should-haves
4. As a musician, i want to be able to see a waveform of the currently loaded sample so i can make better creative decisions.
5. As a musician, i want to be able to create and load playback formula presets so i can quickly brainstorm different ideas.
Could-haves
6. As a musician, i want to know what part of the sample is currently being played back so i can make adjustments to the playback formula.
7. As a musician, i want the option to use pitch corrected time stretching so the sample always stays in key.
8. As a musician, i want to be able to run several playback formulas simultaneously so i can create a layered effect.
Non-functional requirements
User stories
Must-haves
9. As a musician, i want the plugin to be visually appealing and intuitive so i don’t have to struggle with the interface.

Approach and Process
Tools
The framework used for developing the plugin will be HISE. This choice is based on research, see Research (personal) - DAW plugin tools and has no problems supporting FR1-8.
The graphic design will be done using Figma. This is done to support NFR-1.

Planning and priority
Tasks and deadlines are managed using a GitHub project, which is comparable to a Trello (kanban) board. Tasks have a set importance (must have, should have, etc) and are seperated by sprint.



Main research question
How can an audio plugin be created for a digital audio workstation (DAW), that remixes a snippet of audio using a user defined playback formula?
Sub questions
1. How can a DAW plugin be created?
a. Which tools for DAW plugin creation are available?
b. Which tools are most suitable for this project?






Architecture and Design
Flowchart
Iteration 1
This iteration shows the core logic of the application. Setting and changing the playback formula, and the current sample. This flowchart implements FR1-5.


Expert feedback
This first iteration had a few problems. The initial setup part is not conventional as the process is always the same. This needs to be connected to the logic loop.
Another point of feedback is the lack of different shapes (for e.g. decisions, data, functions). This needs to be changed.
Iteration 2
This iteration implements the feedback from iteration 1, connecting the initial setup to the main loop and using proper shapes. This flowchart implements FR1-5.




Expert feedback
The updated flowchart looks significantly better than the first iteration. The main loop is still missing an end point block however (for when the user closes the plugin, for example).


GUI Design
To see the latest designs, see the Figma.

Iteration 1
This design was made before a software design was set up. Because of this, only a very crude example was created. It shows a timeline where you can drag and drop pre-defined presets which contain points that control the playback position of the sample being played back. This implements none of the current functional requirement (as these were not set yet).
The vision of this project is to remix a sample using a formula and to provide features like a visualization to facilitate this, and none of these aspects are visible here (as there isn’t even a formula input box visible).

Feedback (personal)
This design is very unclear, and does not reflect the project vision as has been stated above.


Iteration 2
This iteration was made after the requirements were set up, making it closer to the project vision.
This iteration clearly shows what the project vision is. A formula can be entered which remixes an audio sample, with additional features like a formula visualization to make it easier to understand how the formula plays out.
FR1 is incorporated through the playback formula box. 
FR2 and FR4 are implemented by the waveform at the bottom, as this is a drag-and-drop zone. 
FR3 is the main feature, and is clearly implemented in the top left.
FR5 are the presets in the middle.
FR6 is the playhead in the bottom.
FR7 is implemented as a togglable option in the middle left.

Feedback (peers / musician)
Peer feedback on this iteration has been very positive, generally considering it modern and sleek. The formula visualisation is a bit unclear, however. The sample waveform could also use a time indication. It was considered high quality enough to satisfy NFR-1.
Implementation
The chosen framework for this project is HISE. It is an extension of another framework called JUCE, and it includes a GUI editor, a custom programming language (based on Javascript) and extensive audio components.
Initial setup / basics
To get started with HISE, i first need to download the editor. It is available at https://hise.dev/.
After installing and opening it, we then have to set up the export tools.

Microsoft build tools need to be installed (this can be done with Visual Studio Installer).
To speed up some digital signal processing functions, Intel IPP needs to be installed. 
https://www.intel.com/content/www/us/en/developer/tools/oneapi/ipp.html

After setting it up, i first got started with matching the GUI with the Figma design.


For testing purposes i then built and exported the plugin using HISE.

This uses Visual Studio build tools to build the project, and outputs it to a build folder.
After copying the resulting .vst3 over to my plugin directory and refreshing FL Studio, i could then open it in an effect chain.
After verifying that it works, i then spent time learning HISE script basics.

Scripting/framework basics
HISE has built-in support for timers. These can be used to update the GUI, which is useful for playback visualisation, e.g. updating the sample waveform bar.
A transport handler can be used to communicate with the host DAW (e.g. FL Studio) and manage things like the sync mode (e.g. prefering the internal clock over the DAW clock for synchonization).
GUI elements can be modified and read using Content.getComponent. The return value can be stored in a constant variable. When the script gets compiled, the editor shows autocomplete information for that variable which is very useful. This variable contains all the information of the GUI element, such as the current text value or the element position.


Parsing a formula
In JavaScript it is possible to run a string as code using eval(). Eval is a perfect fit for a formula feature as you can enter any valid piece of HISEscript code as the formula. This feature can be incredibly dangerous however, as potentially any arbitrary piece of code can be ran by simply entering a malicious formula. Filtering the user input is possible but very difficult, without a guarantee of real safety.
Another layer of danger gets introduced because of HISE’s support for system functionality like the filesystem, as pasting the wrong piece of code could render a computer unusable.
The other logical option is implementing a formula parser using HISEscript. Parsing formulas is a problem that has already been solved, but because HISEscript is structured so differently (you cannot use classes for example) a completely custom implementation needs to be created.

Basic parser prototype
For prototyping/demo purposes, I made a quick and dirty formula parser. It does not honour basic math rules like multiplication before addition, nor does it support brackets.
This implementation is mostly used for getting basic results to program the rest of the plugin, like the visualization feature and real audio playback.


A formula 5 * T would follow these steps:
1. Split by whitespace -> array with 3 values (5, *, T)
2. Loop through each of these continuously
a. If the value is equal to a known constant like T, put its value in its place.
b. If the value is equal to a known operator like *, take the int value of the array entry before this one, multiply it by the int value of the int value of the array entry after this one.
3. Loop until every action is performed.

Even considering all the problems with this implementation, it works fine as a demo.
Second parser iteration
Since creating a complete proper tokenizer and parser is outside of the scope of this project (it can be an entire project on it’s own), the existing implementation has been adjusted to be a bit more robust.
The following issues have been tackled:
- Precedence (multiplication before addition, etc)
- Supporting floats (e.g. 0.5)
- Supporting BPM based variables

First, BPM support was added to the plugin. For now this is an adjustable slider in the user interface.

This value is saved as a global, so it can be accessed from anywhere.
In the parser, support for matching the BPM has been added.

B is the current beat, rounded to wholes. It goes up indefinitely.
BI is the current beat, but without rounding. It smoothly interpolates between the beats.
BR is the current beat but is always between 1 and 4, as wholes.
The formula can now be BPM-matched!
To address float support, a handwritten float parser was created. HISEscript seems to only support converting a string to an integer/whole number, so this has to be implemented manually by analyzing the string.
First, a simple function is created for counting the amount of leading zeroes. This is needed to support cases like 2.001 where the decimal starts out with zeroes (as these would be lost otherwise).


Now the main function can be created.

It starts off with ensuring that the input is a string. Then, it splits the string by the dot character (meaning comma’s are not supported). If no dot is found, the length of the split array with be 1 (it will just contain the original string) and this means it can be handled as a standard integer. More than 2 means more than 1 dot, which cannot be parsed.


This piece of code calculates the final number by getting the whole numbers before and after the dot, fixing the decimals using the leading zeroes function and finally returning the sum of both. The formula now supports floats!
To address the precedence issue, the switch cases have simply been reorganized to run division and multiplication first.


After multiplication and division, it runs the rest.

Visualization
First, 100 points are calculated using the formula, where g_End is a global variable equal to the length of the current sample.

In HISE, a ScriptPanel can have a draw routine which can be used to draw graphics like lines and polygons, comparable to a canvas in Javascript.
I have created a draw routine that calls the getPoints function created in the previous screenshot and it draws a line for each point, shifting the X value slightly each iteration and setting the height of the line equal to the value at that point. This way, it visualizes the time flow of the formula.

This draw routine gets ran every time the program loads or the formula gets changed (and the set button is pressed).
The result looks like this.
The visualization can be seen in the top right.
Visualisation second iteration
The first implementation had some issues. The graph was flipped and almost never properly filled the full height. To address this and some other issues, a couple fixes were made.
- Correct orientation and normalization of the visualizer
- Progress indicator
Normalization has been added by getting the highest value in the calculated graph points.

The draw routine of the visualizer has been updated to use this.
The formula progress indicator is a separate panel that was added inside of the GUI.

It’s width is updated every frame to match the current playback position.

The visualizer now looks like this.

Audio playback
Being able to hear what the plugin is doing is the most crucial part of the whole plugin.
There are 2 ways to do playback in this plugin
Pitch correct mode keeps the same pitch by rapidly changing the playback position of the sample (e.g. 90 times per second) to match the formula. It guarantees perfect synchronization, but tends to suffer from artifacts because of the constant jumps.
Pitch shift mode changes the pitch which can speed up or slow down the sample, which eliminates most artifacts as you don’t have to do constant jumps.

To implement both modes, a common HISEscript module was used called the Audio Loop Player. 

 
It can load in a sample and also supports adding a modulator for pitch, so it can be changed within a script for the pitch shift mode.
It does not directly support setting a starting point modulation (e.g. changing where the sample starts when starting to play it) however, and this is needed for both pitch modes. The workaround that was chosen, is setting a sample range every frame.
 
While this does play back the audio correctly, there are very obvious artifacts when playing back (constant and loud popping sounds) because the sample range was not meant to be used this way.
After struggling with this without success, a post was made on the official HISE forums where professional HISE developers can answer questions.

The answer was to use a Sampler module instead of an Audio Looper module.

A sampler supports the SampleStartMod modulator, which allows for seamlessly changing the starting position of the loaded audio file.
When loading in a sample, first a “sample map” is generated (which defines which MIDI notes play which audio file). This is then loaded into the sampler. The waveform module (which generates waveforms based on audio) gets updated to show the new audio file. The sample count of the new sample gets saved to a variable and used for processing.

The new pitch corrected playback code now looks like this.

The pitch shift mode was also implemented using this new approach, where it calculates the pitch required to stay in sync with the formula. When it gets too desynchronized, it forcefully jumps to the right point.



Testing
HISEscript is not a framework that has native unit test functionality. Testing has to be done manually. (The software expert also concluded this is not strictly required for this project)
To test formula outputs, a few have been created beforehand with an expected output.
1000 + BI * 1000 - BR * 1000
1000 * B / 4 + BI * 1000 - B * 1000
250 * BR + BI * 250
When updating formula logic, these are ran and their outputs matched against the previous run.


Reflection
Learning a new language and framework (together with the many quirks of HISEscript) while also solving a relatively unique problem (meaning there are no real tutorials on it) and also not getting much help from LLM tools (as it is not a super popular framework) made this a very challenging but also very rewarding project. In the end, the project vision has been achieved in my opinion and i have gained lots of knowledge on building plugins using HISE which i will be using to improve this project outside of a school context, and also to create new plugins.

Feedback
First expert feedback – Patrick Ijntema (07-04-2025)
I have done research on relevant topics for the project, but then proceeded to start programming before having made a software design. It is important that i create one so that i know how the project works in the future, and so that external developers also know how it works.
I need to put priority on complicated parts of the project, in this case the playback formula. If it turns out the current framework cannot support the feature, i will need to change what tools i use and all of the other work will be lost.
I also should only work with user stories (since i am using scrum), instead of also including requirements.

Second expert feedback – Patrick Ijntema (19-05-2025)
The flowchart I have created does not use commonly used elements like a special shape for decision points. I need to implement these. I also need to avoid having a flowchart that is essentially 4 steps in a row without any other paths, it would be better to just connect it to the rest of the flowchart. I should also try to implement the user stories in the flowchart itself, to “prove” that the user stories are being properly integrated in the software design.

Third expert feedback – Patrick Ijntema (23-05-2025)
The updated flowchart looks good, it only needs an end block in the main loop. The project has turned out nicely and there isn’t any large point of feedback here (aside from thinking it should be uploaded online so people can use it).

Personal project market feedback – Pieter
Feedback was very positive, the concept of the project was interesting and it was also executed nicely. The final grading was a G, with every box being checked.


Conclusion
By learning the HISE framework and doing lots of testing, asking feedback from the software expert at Fontys but also a HISE expert at the forums, a project has been created that closely resembles the original project vision of remixing a song or other audio using just a formula, utilizing variables linked to DAW parameters like BPM.
Next steps
Creating a fully featured formula parser according to existing parsers will be a top priority in next iterations, as the formula forms the core of this project.
Improving the pitch shift mode is also a priority since it currently desynchronizes very quickly.
Presets would also be a useful feature, so users can quickly save a formula that works well.



Attachments
…
Bibliography
Het huidige document heeft geen bronnen.

 ReTime Personal Project

