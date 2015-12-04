!function(){"use strict";angular.module("votm",["ngRoute","ngSanitize"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/home.html"}).when("/overview",{templateUrl:"views/overview.html",controller:"PanelController",controllerAs:"panel"}).when("/instructions",{templateUrl:"views/instructions.html",controller:"instructionsCtrl",controllerAs:"ictrl"}).when("/faq",{templateUrl:"views/faq.html",controller:"faqCtrl",controllerAs:"fctrl"}).when("/checklist",{templateUrl:"views/checklist.html",controller:"checklistCtrl",controllerAs:"cctrl"}).otherwise({redirectTo:"/home"})}])}(),function(){"use strict";angular.module("votm").controller("checklistCtrl",[function(){var a=this;a.items=[{step:"Prepare",id:"P1",equipment:"Camcorder",details:"You can use an HD or a standard definition camcorder, but it is recommended that you set your HD camcorder to standard definition.",checkBox:""},{step:"Prepare",id:"P2",equipment:"Tripod",details:"A tripod is highly recommended as it will keep the camcorder steady during your broadcast.",checkBox:""},{step:"Prepare",id:"P3",equipment:"Laptop Computer",details:"You will attach the camcorder to this computer.",checkBox:""},{step:"Prepare",id:"P4",equipment:"3G/4G Network Cards",details:"The number of cards is determined by how many USB ports are in your computer. These cards will connect your computer to your 3G & 4G networks.",checkBox:""},{step:"Prepare",id:"P5",equipment:"Cable",details:"Cable will be used to connect 3G/4G network cards to the USB ports in your computer.",checkBox:""},{step:"Prepare",id:"P6",equipment:"Power Source for Camcorder & Computer",details:"If you use batteries, be sure to test batteries and backup batteries, so that they last the length of the broadcast. Otherwise, identifiy available power outlets at the location of your broadcast.",checkBox:""},{step:"Prepare",id:"P7",equipment:"Sunscreen/Sunglasses/Water",details:"Don't forget to deal with the elements as necessary.",checkBox:""}]}])}(),function(){"use strict";angular.module("votm").controller("faqCtrl",[function(){var a=this;a.faq=[{category:"general",number:"1",question:"What is Vazzt Video-On-The-Move?",answer:"<p>KenCast's Vazzt Video-On-The-Move makes it easy to capture high quality live video from vehicles, aircrafts, cars, and from on foot. Vazzt then distributes the live content from a central hub to users on the intenet or on a private network.</p>"},{category:"general",number:"2",question:"What do I need to get started with Vazzt VOTM service?",answer:"<p>You need to add 3 things to your computers and Internet resources.</p><ol><li>Wireless IP network services: directly from a carrier (e.g., Sprint EvDO, Verizon EvDO, T-Mobile UMTS, AT&T UMTS, Verizon LTE, Clear WiMAX, etc.) or  a WISP (Wireless Internet Service Provider). or your own private network (WiFi, Bluetooth, wire access fiber, etc.) connected to the Internet.</li><li>The Vazzt Capture Server software (to send the IPTV or file) on each of your laptops or netbooks or computers.</li><li>The Vazzt Enterprise Server software (to catch the IPTV or file) on a server computer at your central hub and this server must have Internet access.</li></ol>"},{category:"general",number:"3",question:"What is different about KenCast's Vazzt VOTM offering?",answer:"<p>There are now scores of solutions appearing to meet what till now has been a huge hidden market for video capture from the field. Although almost all users capturing video from the field already have a camera and laptop, these solutions often require the user to add another heavy boxorbackpack, or they are very expensive services, or lock the user to a set of carrier services or specific IP network(s),or require the user to pass their captured video first through the vendors service center before it is sent back to the user&#39s own central hub, or require viewers to download a plug-in or all of the above problems. KenCast&#39s solution avoids all of these problems. The Vazzt solution is:</p><ul><li>All-software based &#45 NO HARDWARE REQUIRED</li><li>Playback on any user device without KenCast software/plugins &#45 NOTHING required from KenCast </li><li>Agnostic to wireless IP Services and allows the user to employ &#39any&#39 wireless IP networks of his/her own choice and to change them as often as he/she chooses, or finds it necessary, and to do so immediately/on-the-fly</li><li>Amenable to a new IP network service as soon as it is available</li><li>Ready to support an enterprise that wants to set up its own complete wireless video capture capability, from the field to its own central hub, with full security on the streaming video and on the files, without passing captured video through any third party.  Vazzt creates and configures endpoints for a Virtual Private Network.</li><li>Adaptable for organizations so inclined to set up a Video Capture service to compete for this huge market with the scores of current competitors.</li></ul>"},{category:"general",number:"4",question:"What resolution can Vazzt give me?",answer:"<p>The Vazzt encoder that comes with the capture software can now encode at anything up to and including Video at 1080p (1920x1080 pixels, 30 frames per second, with 65K color).  The camera/laptop can be very simple and inexpensive for standard IPTV, but expensive for a full HD IPTV configuration. Vazzt Capture Software will automatically read the default video resolutions available from the camera you attach to the laptop/computer with the Vazzt Capture Server software.  It will present these options to you.  Typical options include the following and can be used in these typical setups:</p><ul><li>(320x240) For the Capture Server use a netbook with built in webcam, subscribe to 2 carrier wireless data services at $60 per month each ($120/month).  There is no other recurring cost for the capture server operation.  You can also bond together WiFi and other IP network services, when available, with the 2 carrier services to get higher resolution, but webcams do not yet have higher resolution capability.</li><li>(720x480) Use a laptop for Capture Server with a prosumer camera and 3 carrier wireless data services for only about $180/month recurring cost. </li><li>(1440x1080) Use a good laptop for Capture Server with a pro camera and 6-7 carrier 3G wireless data services for excellent bandwidth for about $360/month recurring cost.</li></ul><p>However, at this upper resolution you can also use multiple new carrier IP Networks (LTE and/or WiMAX) to get enough bandwidth to support this quality resolution Ð in the range of 2.5-4.5 Mbps).  Currently you may need a server-class computer and a broadband wire connection to the Internet to use the Vazzt Capture Server software at this resolution, until multiple 4G networks are available to be bonded together.</p>"},{category:"general",number:"5",question:"Resolution Available for Coverage with the Vazzt VOTM Service",answer:'<p>When using the Vazzt VOTM Service, the resolution you select will depend on the amount of bandwidth detected by the VazztCaster program and the options that the Vazzt VazztCaster program automatically detects in your camera. </p><p>There are 4 types of cameras on the market today: HD cameras; HDV Cameras; DV Cameras; and Webcams.  The maximum resolutions these cameras offer are as follows: </p><table style="width:100%"><tr><th>Standard</th><th>Resolution</th><th>DAR</th><th>Pixels</th></tr><tr><th>HD Cameras</th><tr><td>Sony HDCAM SR (1080)</td><td>1920 x 1080</td><td>16.9</td><td>2,073,600</td></tr><tr><th>HDV Cameras</th></tr><tr><td>Canon Vixia HV40</td><td>1440 x 1080</td><td>16.9</td><td>1,555,200</td></tr><tr><td>Panasonic DVCPRO</td><td>1440 x 1080</td><td>16.9</td><td>1,555,200</td></tr><tr><td>Panasonic DVCPRO HD 1080, 59.94</td><td>1280 x 1080</td><td>16.9</td><td>1,382,400</td></tr><tr><td>Panasonic DVCPRO HD 720p</td><td>960 x 720</td><td>16.9</td><td>691,200</td></tr><tr><th>DV Cameras</th></tr><tr><td>D1 Pal</td><td>720 x 576</td><td>4.3</td><td>414,720</td></tr><tr><td>D1 NTSC</td><td>720 x 486</td><td>4.3</td><td>349,920</td></tr><tr><td>DV PAL</td><td>720 x 576</td><td>4.3</td><td>414,720</td></tr><tr><td>DV NTSC</td><td>720 x 480</td><td>4.3</td><td>345,600</td></tr><tr><td>DV NTSC</td><td>360 x 240</td><td>4.3</td><td>86,400</td></tr><tr><th>Webcams, aka USB Cameras</th></tr><tr><td><p>Most consumer webcams are capable of providing VGA-resolution video at a frame rate of 30 frames per second. Many newer devices can produce video in multi-megapixel resolutions, and a few can run at high frame rates such as the PlayStation Eye, which can produce 320 ? 240 video at 120 frames per second.</p><p>From: <a href="http://en.wikipedia.org/wiki/Webcam">Wikipedia</a></p><p><strong>DAR</strong>: Display Aspect Ratio</p><p>The <i>VazztCaster software</i> will enable you to set the resolution from among the set of resolutions that the camera you connect to your laptop/computer/netbook supports.  VazztCaster automatically detects the resolution set that each camera supports and presents them to you for your choice.  </p><p>Since <i>VazztCaster</i> performs a bandwidth test for you on startup, you should consider the available bandwidth detected in the bandwidth test when selecting the resolution from the options presented to you.</p></tr></table>'},{category:"general",number:"6",question:"What are the key technologies that KenCast uses in Vazzt?",answer:"<p>The KenCast video encoder within Vazzt VOTM can encode video up to and including 1080p (1920x1080 pixels at 30 fps).  Vazzt monitors available bandwidth and dynamically adjusts the video encoding bit-rate on-the-fly to accommodate fluctuation in bandwidth of the super pipe.</p><p>Several key transmission technologies enable Vazzt to: </p><ul><li><strong>Detect</strong> available IP networks & bandwidth</li><li>Upon launch, Vazzt will explore the immediate vicinity and detect any IP network for which the user&#39s computer has been previously configured.</li><li><strong>Accelerate</strong> delivery on identified networks</li><li>Uses KenCast&#39s patent pending IP Acceleration methods (bandwidth is pushed up on each network found)</li><li><strong>Bond</strong> the Detected/Accelerated networks together into a single fat IP super pipe</li><li>Uses KenCast patent and patent pending technology in network diversity and split/join channeling to achieve bonding.</li><li>Quickly tests the total composite bandwidth of the super pipe sets the default encoding rate based on the test (the user can override the default bandwidth and single-click for a preset profile to ensure a desired, consistent quality, if preferred; or the user can manually configure a custom profile; and IT support at the central hub can remotely access the userÕs laptop and manually configure an appropriate profile)</li><li><strong>Load Balance</strong> by shifting outgoing packets from slowing networks to rising networks.</li><li>Vazzt monitors the performance of each of the bonded networks and allocates the packets among the networks for optimal distribution.</li><li><strong>Protect with KenCast</strong> FEC to ensure flawless live streams and files</li><li>Uses KenCast&#39s renowned patented Fazzt Forward Error Correction algorithms on live streams and files) as employed extensively for the last 15 years by the US Military worldwide and on the battlefield, and by the Entertainment & Media Industry and others</li><li><strong>Secure</strong> the live streams with encryption, and secure files also.</li><li>This is done using 256-bit AES encryption on the bonded pipe. So live streams and files sent over the pipe are very secure. Keys for deciphering are distributed using SSL type security connection. KenCast has great experience & expertise with encryption and can customize the security solution to the specific needs of an organization. </li><li><strong>Dynamically Adjust Bit-Rate Encoding</strong> of the camera feed.</li><li>Vazzt is continually monitoring the total available bandwidth of the super pipe it has created.  If the overall bandwidth falls below the current encoding rate, Vazzt lowers the encoding rate to live within the new bandwidth level. If the overall bandwidth rises, Vazzt will raise the encoding rate as long as the bandwidth rises or until the originally selected encoding rate is reached. This process results in smoothly upgrading or downgrading video quality to available bandwidth.</li></ul>"},{category:"general",number:"7",question:"Who can use Vazzt VOTM? To which markets is Vazzt of most value?",answer:'<table style="width:100%"><tr><td>Police, Fire, and EMS</th><td>Enterprises of all Types</td><td>Aerial Surveillance</td></tr><tr><td>TV Stations</td><td>Military</td><td>ENG/SNG Vehicles</td></tr><tr><td>Newspapers</td><td>Municipalities</td><td>Corporations</td></tr><tr><td>Homeland Security</td><td>State and Federal Agencies</td><td>Sports Events</td></tr><tr><td>Entertainment Events</td><td>University Campus</td><td>Stringers</td></tr><tr><td>Worship Services</td><td>Citizen Journalists</td><td>SIGs</td></tr></table>Users in an enterprise, who must move about and can add great value to their task with the capture of video in the field and with sharing it with their co-workers, will find Vazzt very valuable.  Vazzt can be dynamically reconfigured for varying local IP Network coverage.  And such enterprises of necessity cannot always allow their content to pass through a commercial vendor or a public commercial service offering (for example, surveillance video).  Because the user need only obtain Vazzt software, and can employ their own laptops, commercial IP network services, and central hub computer equipment on Internet access lines, the only remaining requirement might be additional IP network services.  By leveraging the sunk cost of their own resources, Enterprises may find Vazzt a fraction of the price of alternatives.'},{category:"general",number:"8",question:"Why the name Vazzt VOTM?",answer:"<p>One of the keys to successful video capture over IP networks is to find enough bandwidth at a moments notice and keep it while on the move.  KenCastÕs solution does it well and in fact typically finds a VAST (Vazzt) amount of bandwidth for you.  And KenCastÕs solution is targeted to video capture by those on location, especially on the move in vehicles, aircraft or on foot.  So we dubbed it Vazzt Video-On-The-Move (VOTM).  </p>"},{category:"equipment",number:"9",question:"What kind of camera do I need?",answer:"<p>Vazzt will work with almost any camera on the market, with analog or digital output.  You can use an HD pro camera with SDI output, a prosumer camera with HDMI output, a DV camcorder, an external web cam (e.g., Logitech), or even the internal webcam in your netbook (it works fine).  The quality of the video will vary with the quality of the camera.  At the upper extreme is an HD pro camera with live output to a laptop, in which case the camera setup can get very expensive, as well as more complex Ð but it works well with Vazzt. </p>"},{category:"equipment",number:"10",question:"How do I attach my camera to my laptop?",answer:"<p>There are many ways to attach you camera to your laptop.  For digital camera output, we recommend connecting the camera with a wire to the faster firewire port Ð but the USB port will also work.  As an example, for analog camera output you can use an external capture device (such as the Dazzle from Pinnacle) with a 3-port composite connector into the camera and a USB connection on the other end of the cable into the laptop.  Also, there are many ways to interface a camera to an internal video capture card.  See illustrations below: </p>"}]}])}(),function(){"use strict";angular.module("votm").controller("instructionsCtrl",[function(){var a=this;a.showValue=!1,a.showDetails=function(b){for(var c=0;c<this.steps.length;c++)a.steps[c].id===b&&(a.name=a.steps[c].name,a.step=a.steps[c].step,a.description=a.steps[c].description,a.figure=a.steps[c].figure,a.alt=a.steps[c].alt,a.imageCaption=a.steps[c].imageCaption,a.showValue=!0)},a.hideDetails=function(){a.showValue=!1},a.steps=[{name:"Acquire Equipment",id:"P1",step:"Prepare",description:"<p class= 'popUpText'>Here is a list of equipment that you will need before the setup and broadcast. For a checklist to have at the broadcast, click the button below.</p><ol class='popUpText'><li>Camcorder or other filming device</li><li>Wireless IP Network Services: directly from carrier or WISP (Wireless Internet Service Provider)</li><li>Computer/s with Vazzt Capture Server software that you can bring to broadcast location</li><li>A server computer at your central hub with internet access and Vazzt Capture Server software</li><li>Battery or power outlet for camcorder and computer</li><li>Tripod</li></ol><button class= 'btn btn-default btn-lg'>Link to Checklist</button>",figure:"",alt:"",imageCaption:""},{name:"Arrange for 3G/4G Data Services",id:"P2",step:"Prepare",description:"<p>For your broadcast, you will need&nbsp;3G &amp; 4G Wireless Cards&nbsp;that will allow you to pick up IP networks (wireless intenet connections)&nbsp;from multiple providers.&nbsp;Vazzt will bond&nbsp; these networks&nbsp;to make your broadcast faster.&nbsp;</p><p>There is no&nbsp;theoretical limit to the number of IP Networks that can be bonded with Vazzt. The practical number depends on the number of data services in a given location for which you are a subcriber and the number of ports on your laptop. When you set up for the broadcast, you will insert the 3G &amp; 4G Wireless Cards into the laptop that you will have at the site of your broadcast.&nbsp;</p><p>There are a variety of 3G &amp; 4G USB Wireless Cards&nbsp;that are provided by telco carrier services to enable operation.&nbsp; These cards can often work immediately with Vazzt VOTM.&nbsp; Some cards required manually setting parameters to work with Vazzt VOTM.&nbsp; We can recommend at least the following cards:</p><table border=1 cellpadding=1 cellspacing=1><tbody><tr><td><h3>Operator</h3><td><h3>Product</h3><td><h3>Maker&nbsp;</h3><td><h3>Model</h3><tr><td>&nbsp;<td>T-mobile webConnect USB Laptop Stick<td>HUAW EI<td>UMG181<tr><td>Verizon<td>Verizon Wireless USB760 Modem<td>Novatel Wireless<td>USB760<tr><td>&nbsp;<td>Sprint Novatel Wireless U727<td>Novatel Wireless<td>U727<tr><td>&nbsp;<td>Verizon Wireless UMW190 Global USB Modem<td>Paintech/Curitel<td>UMW190<tr><td>AT&amp;T<td>AT &amp; T USB Connect Lightning<td>Sierra Wireless<td>UB 305<tr><td>&nbsp;<td>Compass 597<td>Sierra Wireless<td>&nbsp;</table><p>&nbsp;</p><p>You can bond together &ldquo;any&rdquo; IP Networks that can carry IP traffic, wired or wireless.&nbsp; These include 3G/4G, Satellite, WiFi, Bluetooth, fiber optics, terrestrial wire Internet, etc.&nbsp; If it can carry IP traffic, Vazzt can bond it.</p><p>&nbsp;</p><p>&nbsp;</p>",figure:" ",alt:" ",imageCaption:" "},{name:"Install VazztCaster",id:"P3",step:"Prepare",description:"<p>Only a registered Vazzt Producer can download the <strong>VazztCasterInstaller.exe</strong> program.&nbsp; The camera persons who will cover an Event for a producer must get this program from the Producer and load it on their laptop.</p><p>Launch the VaatCasterInstaller.exe program and follow the prompts to install the <strong>VazztCaster.exe</strong> program which the Camera person will use to cover the Event.</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>",figure:"",alt:"",imageCaption:""},{name:"Get Login Credentials",id:"P4",step:"Prepare",description:"<p>The camera man who will cover the Event must get the Login Credentials for the event from the producer.&nbsp; The credentials are:</p><ul><li>Producer&rsquo;s Name as it appears on Vazzt.com</li><li>Channel Name to be used for the Event to be covered</li><li>Password for that Channel</li></ul>",figure:"",alt:"",imageCaption:""},{name:"Attach Camera",id:"S1",step:"Setup",description:"<p>There are many ways to attach you camera to your laptop.&nbsp; For digital camera output, we recommend connecting the camera with a wire to the faster firewire port &ndash; but the USB port will also work.&nbsp; As an example, for analog camera output you can use an external capture device (such as the Dazzle from Pinnacle) with a 3-port composite connector into the camera and a USB connection on the other end of the cable into the laptop.&nbsp; Also, there are many ways to interface a camera to an internal video capture card.&nbsp; See illustrations below:</p>",figure:"",alt:"",imageCaption:""},{name:"Launch VazztCaster",id:"S2",step:"Setup",description:"<p>Launch the VazztCaster.exe program on your laptop by clicking on the Vazzt icon (red V) on your desktop. &nbsp;After launch, on the home page of VazztCaster click on the Login Icon (person) and enter the Credentials:</p><p>Next Click on the Video Settings Icon (blue camcorder)&nbsp; and enter your choice of&nbsp;</p><p>&nbsp;</p><p>Note that the VazztCaster will automatically set default values, if possible, in the Video Settings fields based on the camera attached, the IP networks it finds, and the audio equipment attached:</p><ul><li>Video Capture Devices</li><li>Video Resolution</li><li>Video Bandwidth</li><li>Aspect Ratio</li><li>Audio Capture Device</li><li>And other Audio parameters.&nbsp;</li></ul><p>However, you can manually override these.&nbsp; Click the OK button when you are finished.</p><p>Most cameras will automatically provide notification of the various resolutions that the camera can support.&nbsp; VazztCaster can detect this and by examining the bandwidth detected, also automatically, VazztCaster sets default resolution and bandwidth.</p><p>&nbsp;</p><p>&nbsp;</p>",figure:"../img/instructionsImages/launchVazztCaster.jpg",alt:"Launch VazztCaster",imageCaption:"After launching VazztCaster, this is what your screen should look like."},{name:"Start Broadcasting",id:"B1",step:"Broadcast",description:"<p>To start broadcasting live, click on the Start Transmission button (green arrow).&nbsp; The resulting screen might look like the image below.</p><p>In this example, there are 3 networks detected that are bonded together by the VazztCaster to provide a running average 1.267 Mbps.&nbsp; This enables good Standard Definition transmission.</p>",figure:"",alt:"",imageCaption:""},{name:"Stop Broadcasting",id:"B2",step:"Broadcast",description:"<p>If the bandwidth is not adequate to carry the resolution initially set or the bandwidth drops later on, stop the broadcast by clicking the Stop Transmission button (yellow square)&nbsp;and go back to Video Settings and select parameters that will work in bandwidth currently detected.&nbsp; Then Start the broadcast again.</p>",figure:"",alt:"",imageCaption:""},{name:"View Broadcast",id:"B3",step:"Broadcast",description:"<p>Live video coming into the Vazzt Enterprise Server at the Central Hub can be passed through (retransmitted) to a web site or other destination or multicast on a multicast-enabled network, accessed over the Internet from the web site and played out with a Flash Player, stored/archived for future file delivery on demand or played out on schedule or on-demand.</p>",figure:"",alt:"",imageCaption:""}]}])}(),function(){"use strict";angular.module("votm").controller("PanelController",function(){this.tab=1,this.setTab=function(a){this.tab=a},this.isSelected=function(a){return this.tab===a}})}(),function(){"use strict";angular.module("votm").directive("navigationDirective",[function(){return{templateUrl:"/views/navigation.html"}}])}();