# Web audio codecs
Written 2022-09-23T17:34:34.545Z

I have been working on streaming chunked audio through, and I think i have finnally got it working. 
 
I started working on this project a very long time ago, it was my goal pretty much since i started with javascript, nodejs... 

It was a very long journey, trying out many many ways to do this, from using range requests, splitting files, throttling the speed of the http request to using HLS and DASH. One of my side goals was to stream it all through a websocket, and I was able to achieve it using my saviour DASH. DASH is one of the few protocols that is supported by Media Source Extensions, which is essential to stream chunked audio. 

Dash outputs a init file which contains information about the file in many headers, and then a sequence of files containing the audio data itself, aswell as a .mpd file containing information about the DASH stream itself (streams, entry points...). Luckily, all i needed was the init and segement files, because Media source extensions are compatible with most codecs under the mpeg 4 container, as long as the container has all the headers that DASH appends to it. So the plan was to generate a DASH stream, and use the init file to load mpeg4 data with OPUS/FLAC audio streams. And after many attempts to get the streaming working through websockets, it now works. I also tried streaming it with WebM, but WebM didn't support FLAC, which was one of my wants. So OPUS/FLAC over Mpeg4 with DASH headers is the solution.

I might make this into an actual library like `ws-dash` if I feel like parsing the .mpd index file etc. 

One of my other ideas was to fork HLS.js and replace the XHR component with the websocket component, but after skimming over the code I quickly dropped the idea since HLS.js is massive, and doing that would probably take longer then just writing this small amount of code.

Anyways, I'm really happy that this works. And to be honest the entire reason to do this was because I though HLS.js looked ugly when looking at the network tab because of the HTTP requests.

I don't intend on posting to this blog very often, just thought this might be a nice oppurtunity to use it. :)

PS: If you have any idea for improvements, contact me at wavelink@email.cz, I'd be really happy for any info about this.
