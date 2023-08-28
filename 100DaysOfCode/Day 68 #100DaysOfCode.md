# Day 68 of #100DaysOfCode

## 📖 Today

## The Odin Project (Foundation Course)
  
What is a web server?

- A computer that hosts a website
  
What is a network?

-

What is the internet?

- A network of computers that talks to each other regardless of the distance

What is an IP address?

- A unique string of numbers which identifies a network-connected device

What is a router?

-

What is an ISP?

- A network of computers that provides computer clients the ability to connect to the internet or talk to each other

What are packets and how are they used to transfer data?

- Data packets

What is a client?

- A computer that is connected to the internet that's capable of requesting or obtaining information from the server

What is a server?

- A computer that stores websites, pages, or apps.

What is a web page?

- A document which can be displayed in a web browser

What is a web browser?

- An application that has the ability to show or visit websites

What is a search engine?

- A web service which helps locate websites using search indexes, it's like a library.

What is a DNS request?

-

Which browser are you currently using?

- Microsoft Edge, Chrome and Firefox
  
In your own words, explain what happens when you run a search on google.com.

- The web service will look for collection of search indexes that's relevant, similar or related to the keywords I input then show results.

## Day 1 - Meta FEWD course

Internet = Interconnected Network
A Network forms from two or more computers connected to each other
IP Packets = Data that is being sent throught the network
IP Packets contains IP Header & IP Data
IP Header contains Source & Destination IP address

2 common Payload protocols

1. Transmission Control Protocol (TCP) - ensures that data arrives correctly & in order eg. text, images
2. User Datagram Protocol (UDP) - solves corruption, data that can tolerate data lost eg. live video stream, voice calls

HTTP, request-response based protocol

### HTTP REQUEST syntax

METHOD, PATH, VERSION and HEADERS

METHODS - 4 primary HTTP methods

GET = Retrive
POST = Send
PUT = Update
DELETE = Remove

PATH
File path that the web server is trying to access

VERSION = most commonly used are HTTP 1.1 & 2.0

HEADERS contains additional info about the request and requestor

## Day 2 Continuation

Hypertext = Hyper a greek prefix, which means "over" or "beyond".

Hypertext allows users to get more information out of a text or word, as they can use it to access additional websites.

Interconnected by Hyperlinks

HTTP is a protocol that used by web clients and servers. It transfer web resources such as HTML files and is the foundation of any data exchages on the web.

Website vs Web App

- Website is more informative, everyone only views the content
- Web App is highly interactive, has dynamic and personalized contents

### HTTP Response

5 Status code groups

1. Informational (100-199)
2. Successful (200-299)
3. Redirection (300-399)
4. Client error (400-499)
5. Server error (500-599)

HTTPS = Secure, before content is sent, it is turned into a secret code

## Week 3: Static and dynamic content

### Static and Dynamic content

Web/Client Browser > Web Server > Application Server
Caching

### Single page applications (SPA)

SPA = Single Page Applications means only 1 HTML page, content updates dynamically
2 SPA methods of delivering resources

1. Bundling = Immediately deliver all resources
2. Lazy loading = Dynamically deliver resources as needer

### React components

Isolated Development
Isolated Testing
Re-using components
React libraries

### The Virtual DOM

Reconciliation process updates the components in the DOM inline with the Virtual DOM
Fiber Architecture = Priority system, change elements that's currently displayed first

### Component hierarchy
