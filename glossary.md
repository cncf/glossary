# Cloud Native Glossary

Please write a glossary definition with the following format for the terms you signed up for on [this sheet*](https://docs.google.com/spreadsheets/d/1AP8Ts4e6o9GTA_df406f0ceruSLKSmd1uahf1NfsB3I/edit#gid=1925947464)  (1) what it is, (2) problem it addresses, and (3) how it helps.  Each section shouldn't exceed 100 words (a total of 300 words max per term).
Prior to our next meeting, please review what your peers have written, so we can decide what works best and how to tweak entries so they are all consistent. While writing, feel free to have a look at what others do to "borrow" good ideas and add comments to things you'd like to discuss during our meeting. 
*If a term is missing, it's because we copied and pasted after you added it, so feel free to add it below.

## Persona for this glossary: "101 persona" 

Content for anyone interested in cloud native concepts but with little to no previous tech knowledge. From the CEO who's suddenly in regular meetings with their CIO to discuss a migration of mission critical systems to a cloud native architecture to the new marketing or sales rep joining a cloud native startup who needs to get up to speed. 
At this stage, they all just need to understand what the tech is and what role it plays in the ecosystem. Due to their lack of previous knowledge, they'll benefit from examples that make these abstract tech concepts more concrete (e.g. machine >> your laptop, orchestrator >> OS, network >> the internet, scalability >> Netflix each Friday evening).

![personas](/images/personas.png)


## Status

Please let other contributors know what the status of your definition is there are 4 statuses

Status: No Definition - Needs Work

Status: In Progress

Status: Feedback Appreciated

Status: Completed-v1

## Business impact of cloud native defined

Business operating models in today’s world have shifted dramatically. The ability to adjust to changing customer demands, technology stacks across supply chains, mergers and divestitures, and manage people dynamically are all contributing toward a move toward becoming Digital.  Digital transformation has now led to a world where organizations largely derive value and revenue through digital interactions.No longer is technology merely supporting business processes, it has become a strategic differentiator. 

Cloud native technologies allow companies to deliver digital products and services to market faster with increased scalability, stability, and resiliency to adapt as market needs shift while minimizing operations cost. loud native technologies automate operations to improve efficiency, elastically scale based on customer needs, and ensure business continuity.

The Cloud Native Computing Foundation seeks to drive adoption of this paradigm by fostering and sustaining a community and ecosystem of open source, vendor-neutral projects which focus on driving business value. We are a neutral space for open collaboration and innovation that enables the creation of new billion-dollar markets.


## Terms

### Abstraction

Status: In Progress

***What it is***

Abstraction is a process of hiding details and complex information that is not relevant to people who are using them. It also allows us to extract the essence of the details and replace them with more generalized information. 
 
***Problem it addresses***

Without abstraction, users (people and programs) would be exposed to a large amount of information that is irrelevant to them. Just like people do not need to know all the details of how a computer works in order to use it, not all information needs to be available in order for us to consume the output of what runs beneath. 

***How it helps***

With abstraction, all the details could be hidden, which helps reduce complexity and unnecessary redundancy. and people who are using them could focus on what is relevant to accomplishing their goals.. 

### API gateway

Status: Completed-v1

***What it is***

An API gateway is a tool that aggregates together the APIs of many other applications, making them all available in one place. Typically API gateways are used with web services, and some API gateways may provide additional functionality beyond simply providing access to the backing web services.

***Problem it addresses***

API gateways provide one single access point, meaning that security teams need only worry about one ‘front door’, and clients need only know about one address. 

***How it helps***

By providing a single access point for requests to all web services in a system, an API gateway can simplify operational concerns like security and observability. As all requests flow through the API gateway, it presents a simple, single place to add cross-cutting functionality such as metrics-gathering, rate-limiting, and authorization (using schemes such as OAuth). 

### Application Programming Interface (API)

Status: Completed-v1

***What it is***

An application programming interface, API, is a way for computer programs to interact with each other. Just as humans interact with a web site via a web page, an API is a way to allow computer programs to interact with each other.

***Problem it addresses***

To allow computer programs, otherwise known as apps, to interact and share information with each other in a language that they both understand and agree upon. 

***How it helps***

APIs are one of the building blocks for modern applications because they provide a way for apps to interact in a straightforward manner for developers. Whenever you hear about microservices working together, for example, you can infer that they are interacting with each other via an API.

### Bare metal machine

Status: In Progress

***What it is***

A computer consists of hardware — mainly the central processing unit (CPU), memory, and storage — needed to run applications or programs. An operating system is the software (OS) that sits on top of the hardware, manages these resources, and runs the applications (e.g. Outlook or the Microsoft stack on a laptop) on your laptop. The OS schedules when each app has access to a resource, ensuring each application has enough to run smoothly. 

Machines without virtual machines but rather just compute resources are referred to as “bare metal.”

A bare metal environment consists of single tenant (resources allocated to only that user) servers. The single user has access to all of the computing resources (RAM and CPU), unlike a multi-tenant environment where others have access to the resources.  A Bare Metal environment is generally one without an Operating System and allows you to work on runtimes versus virtual machines.

***Problem it addresses***

Bare metal gives you more control and computational power and is typically less expensive than VMs because you can purchase only the resources you need for the time that you need them. Application and web traffic can be “bursty” in nature  and often has heavy simultaneous usage from end users while also having long periods of low traffic or almost no usage.  When hosting in a cloud or hybrid cloud/ prem environment often you need to buy and configure resources to sustain the peak and high points of the traffic and usage but you also end up with long periods of over-configuration because of low traffic and this leads to higher cost for both hosting and maintenance.  

***How it helps***

By utilizing bare metal resources and contracting with cloud providers for a usage-based model you can scale the hosting resources up when traffic is heavy and reduce the resources down when it subsides. When configured properly this can be done in less than a minute so you instantly have more hosting when you need it and less when you don’t, only paying for what you actually use.  Because the resources are yours alone and not shared with others the application is inherently more secure and you can do more with less resources compared to a virtualized environment.

### Blue green deployment

Status: In Progress

***What it is***

Blue/Green Deployment is a strategy for updating running computer systems with minimal downtime. The operator maintains two environments, dubbed “blue” and “green”. One serves production traffic, whilst the other is updated. Once testing has concluded on the non-active environment, production traffic is switched over to it (often via the use of a load balancer). It is of note that Blue/Green Deployment usually means the switching of entire environments, comprising many services, all at once. Confusingly, sometimes the term is used with regard to individual services within a system. To avoid this ambiguity, the term “zero-downtime deployment” is preferred when referring to individual components.

***Problem it addresses***

Blue/Green Deployments allow minimal downtime when updating software that must be changed in ‘lockstep’ owing to a lack of backwards compatibility. For example, Blue/Green Deployment would be appropriate for when an online store consisting of a website and a database needs to be updated, and the new version of the database doesn’t work with the old version of the website, and vice versa. In this instance, both need to be changed at the same time. If this was done on the production system, customers would notice downtime.

***How it helps***

Blue/Green Deployment is an appropriate strategy for non-cloud native software that needs to be updated with minimal downtime. However its use is normally a ‘smell’ that legacy software needs to be re-engineered so that components can be updated individually.

### Canary Deployments

Status: Feedback Appreciated

***What it is***

Based on the expression “Canary in a coal mine”, canary deployments are designed to examine new software deployments, in production, with limited negative impact in case of errors.  Organizations can run two (or more) versions of the same software in production, get feedback, diagnose errors, and quickly rollback to the stable version if necessary. A common example of a canary deployment is the blue green deployment strategy.

***Problem it addresses***

Examining a new deployment based solely on automated testing may not give accurate feedback. Updating deployments all at once may cause errors or failures that require a rollback to the previous version causing downtime.

***How it helps***

Allowing organic interaction with new deployments in a controlled manner allows for targeted feedback from users. This strategy enables organizations to minimize downtime with quick rollbacks in case of issues with the new deployment.

### Cloud computing

Status: In Progress

***What it is***

Cloud computing is a method to offer and deliver services over the internet. Cloud computing gives users the ability to access and use computing power in a remote physical location. The types of services delivered over the cloud can include software, data storage, networking resources, analytic tools, databases, and more. There are countless cloud locations and services available, allowing organizations to determine how to distribute their workloads. . The principal types of cloud computing architectures are public cloud, private cloud, hybrid cloud, and community cloud.

***Problem it addresses***

Before the arrival of cloud computing, organizations had to set up large IT departments and physical infrastructure on premise, called data centers. Any significant form of upgrade or revamp came with problems such as large costs, time and resource allocations, and downtime for the organization’s websites. The physical system restricted operational access from remote locations. Without proper backup mechanisms in place, organizations also faced the danger of losing all data in the event of a crisis or natural calamity.

***How it helps***

Cloud computing allows enterprises to reduce the need for big IT infrastructure set-ups within organizations. organizations can focus more on business operations since all IT needs, including hardware and software upgrades, are taken care of by the cloud provider. The need-based service structure of cloud computing allows for great cost-efficiency, flexibility, and scalability. Cloud environments are normally set up with dedicated servers in highly secure data centers with proper backups in place. This makes businesses run smoothly even in the event of a crisis. 

### Cloud native applications

Status: Feedback 

***What it is***

Cloud native applications are specifically designed to take advantage of cloud computing models while keeping it independent of any particular cloud stack. It provides consistent deployment as they are optimized to run across public, on-premises and hybrid clouds. Cloud native applications are intended to be scaled with speed and agility as business systems constantly evolve.

The two main classes of applications are stateful and stateless, which have very different requirements for production readiness. Most importantly being how both the state and the data are protected and preserved.  In the early years of Kubernetes, the platform primarily supported and ran stateless applications, defined as applications that do not need to retain data from one session to the next when containers are restarted. With the growing adoption and community contribution of Kubernetes, it has evolved as one of the leading platforms for every type of application, including the deployment and management of scalable and highly available stateful applications.

***Problem it addresses***

There is no “one size fits all” path to cloud native applications as it varies by organization and the different priorities when they begin to modernize their existing application architecture and infrastructure to evolve with cloud native principles. Cloud native applications need to be portable across environments, which is why they rely on containers instead of specific cloud APIs. Compared to legacy applications, there can be hurdles when running and deploying cloud native applications  in production. 

***How it helps***

Cloud native applications are on the rise. The evolution of cloud computing has been remarkable, resulting not only in a rapidly growing market and innovation, but also in shifting mindsets and practices pointing toward a new IT operating model and software development paradigm for DevOps and Microservices. Evolving toward cloud native application development and delivery is multifaceted, affecting aspects throughout the organization including culture, processes, architecture, and technology. Decide whether to build or buy a Kubernetes platform.

### Cloud native technologies

Status: In Progress

***What it is***

Cloud native technologies are those that can be used to uphold the ‘promise of the cloud’, and leverage the benefits of cloud computing to their fullest. The Cloud Native Computing Foundation hosts a number of projects that were designed from the ground up to exploit the capabilities of cloud computing.

***Problem it addresses***

There are often many downsides to traditional models of IT operation, some of which may be more prevalent than others. Traditional systems are: hard to scale; not fault-tolerant; not self-healing; inefficient due to poor utilisation of resources; the list goes on.

***How it helps***

The use of Cloud Native Technologies means that the desirable traits of cloud-native systems are easier to achieve. Rather than fighting against the new paradigm, Cloud Native Technologies are designed to work well in the cloud environment. Generally speaking they are automatable, self-healing, and scalable.

### Cloud native security

Status: completed-v1

***What it is***

Cloud native security is an approach for securing cloud native applications. This approach ensures that security requirements are included throughout a cloud native applications lifecycle (develop, distribute, deploy, and runtime). Cloud native security seeks to ensure the same conditions of diligence, integrity, trust, and threat prevention as traditional security models while integrating modern concepts of ephemerality, distribution, and immutability.

***Problem it addresses***

The traditional perimeter-based security approaches are designed for static environments and are hard to scale across highly dynamic, interconnected, and distributed architectures

***How it helps***

Cloud native security introduces a new paradigm that protects applications by migrating from a perimeter-based approach to one where security moves closer to dynamic workloads. This approach identifies and secures workloads to meet the scale needs of cloud native applications while accommodating constant flux. It also requires the adoption of increased automation in the application security lifecycle to ensure availability, assurance, resilience, and redundancy at scale. 

### Cluster

Status: In Progress

***What it is***

A cluster is a group of computers or software services that work together towards some common goal. In the context of cloud native computing the term is most often applied to Kubernetes, whereby a cluster is a set of services often running on different computers that allow the user to run workloads in containers, without having to worry about exactly how and where those workloads run. Other systems run in clusters too, such as databases and message queues.

***Problem it addresses***

If software runs on one single computer then it present a single point of failure - if that computer crashes, or the cleaner accidentally unplugs the power cable, then some business-critical system may be taken offline.

***How it helps***

By running across multiple machines, clustered, distributed systems avoid having a single point of failure. Authoring distributed systems is difficult and a discipline of computer science in its own right - hence why it is only now due to the necessity of global systems and after years of trial and error do Cloud Native Technologies present the building blocks to make the operation and creation of distributed systems easier.

### Continuous delivery (CD)

Status: In Progress

***What it is***

Continuous Delivery (CD) is a set of practices in which code changes are automatically deployed into either acceptance environments or production. CD crucially includes procedures to ensure that software is adequately tested before deployment as well as provide a way to rollback changes if deemed necessary. Continuous Integration is the first step towards Continuous Delivery (i.e. changes have to merge cleanly before they can be tested and deployed).

***Problem it addresses***

Deploying reliable updates becomes a problem at scale.  Ideally, we would like to be able to have more update cycles to give better value to our end users but doing it manually incurs high transaction costs for every change. To avoid these costs, historically organisations have released less frequently, deploying more changes at once, and therefore increasing the risk that something goes wrong. Continuous Delivery ensures a  deployment strategy that adequately tests the software and allows rollback to a previously working version if the end result isn’t desirable. 

***How it helps***

CD strategies create an automated platform that tests and deploys the software using a variety of deployment strategies such as canary builds or blue-green tests. This allows developers to have a regular and frequent update cycle while also giving them peace of mind that the new revision has been tested and that they have a way to minimize the blast radius if things go sideways.

### Continuous integration (CI)

Status: In Progress

***What it is***

Continuous Integration (CI) is the practice of integrating code changes from different authors as regularly as possible. This is normally affected by a Continuous Integration software that watches a source control system (such as Git, Mercurial or Subversion) and when a change is noticed, performs a series of actions in order to ensure that the latest changes are ‘good’. CI is a prerequisite of Continuous Delivery.

***Problem it addresses***

Software systems are often large and complex, and therefore require many developers to maintain them. These developers may make conflicting changes, and inadvertently break each other’s work. Additionally with many developers working on a project, any common tasks (such as testing, and calculating code quality) would need to be repeated by each developer, wasting time.

***How it helps***

CI software automatically checks that code changes merge cleanly whenever any developer ‘pushes’ their changes. It is a near-ubiquitous practice to use the CI server to run code quality checks, tests, and even deployments. As such, it becomes a concrete implementation of quality control within the team.

### DevOps

Status: Feedback Appreciated

***What it is***

Organizations have increasingly embraced modern software development practices, public cloud infrastructure, and cloud-native technologies and applications. DevOps, short for development operations, is the cultural change driven by adopting these new technologies. DevOps aims to break the barrier between developers and operations teams during the typical IT data center lifecycle. New technologies, such as containers, enable developers to "write once, run anywhere" and shift code execution to developers, thus, freeing operations teams to focus on scalability, security, and automation of day-to-day enablement of developer workflows. 

***Problem it addresses***

Applications need infrastructure to run, and the previously slow-moving pace of infrastructure setup hampered developers' ability to create new functionality quicker. When environments are not set up correctly, developers waste time debugging and communicating with operations for the correct environment.

***How it helps***

By giving developers the ability to write and execute application code anywhere without back-and-forth to operations teams can shift their focus to other responsibilities. Operations can focus on scalability, security, and other tasks to enable application growth. Developers can give more structured feedback to operations about how the application should perform. 

### DevSecOps

Status: Feedback Appreciated

***What it is***

The term DevSecOps refers to a cultural merger of the development, security, and operations responsibilities. It extends the DevOps approach, where operation teams provide and manage tools to increase developers' productivity to include security. DevSecOps focuses on implementing security considerations into the daily developer workflow without hampering the developers' productivity. Like DevOps, DevSecOps is a cultural shift, pushed by the technologies adopted, with unique adoption methods.  


***Problem it addresses***

Without DevSecOps, the development, security, and operations teams exist in silos. Each team has conflicting goals about where, when, and how to deploy infrastructure and software. DevSecOps focuses on breaking down these silos so teams can create secure, automated workflows and avoid production downtime. 

***How it helps***

DevSecOps will help to:

* Increase productivity from automation and communication
* Reduce security mishaps and the cost incurred from them
* Foster better team communication and understanding of priorities
* Reduce friction between teams --- DevOps + Security

### Distributed applications

Status: In Progress

***What it is***

A distributed application is one where the logic required to perform a useful action is split amongst many programs that run as distinct processes and may be located on different computers, perhaps even in different data centres.

***Problem it addresses***

An application running on one single computer is fragile - if that one computer fails for any reason, the application is totally unavailable. 

***How it helps***

By splitting the application up into pieces and running those in many places, the overall system can tolerate more failures. This does however, come at a cost of increased complexity and operational overhead - you’re now running lots of applications instead of one!

### Distributed system

Status: In Progress

***What it is***

Distributed systems consist of small components that exist across various locations / machines that are connected under the same network. They communicate with each other in order to achieve a common goal. It is likened to how a remote team works. Regardless of where they are, the team completes tasks by collaborating from various locations and produces the same result as it would an on-site team. 
 
***Problem it addresses***

In a traditional system, scaling vertically gets expensive and time consuming as it requires constant updates to a single machine. Distributed systems allow horizontal scaling which can handle a sudden increase in workloads or resources consumption. 
In addition, having a system in one place exposes itself to risks of failure. Because of the redundancy in distributed systems, even if other machines go down, it can still keep working to produce the same result. 

***How it helps***

Some words go here ;)

### Immutable infrastructure

Status: In Progress

***What it is***

Immutable Infrastructure is computer infrastructure (virtual machines, containers, network appliances) that cannot be changed once it has been deployed. This may be effectively immutable in the sense that unauthorised changes are overwritten by an automated process, or more strongly immutable in the sense that changes cannot be made in the first place. Some systems will use characteristics of the deployment infrastructure to identify elements that have diverged, and present these in a report to operators.

***Problem it addresses***

Security and compliance can be undermined by administrators making changes to running production systems. Often this is necessary for debugging live problems, but in the hands of undisciplined operators it can present an environment where no assumptions can be made about the state of the system, and even worse, no audit history is available. 

***How it helps***

By preventing or identifying unauthorised changes, immutable infrastructure makes it easier to identify and mitigate security risks. It aids operability by ensuring that administrators can make given assumptions about a system, knowing that no-one else has made changes that they’ve forgotten to communicate. Immutable Infrastructure often goes hand-in-hand with Infrastructure-as-Code, wherein all automation that leads to the creation of infrastructure is stored in version control (eg Git). This combination of immutability and version control means that there is a durable audit log of every authorised change to a system.

### Infrastructure as code

Status: In Progress

***What it is***

Infrastructure as code is a procedure where data centers resources are defined by machine readable code. This replaces the traditional model where one would configure hardware manually, usually through shell scripts or other configuration tools. 

***Problem it addresses***

When provisioning several resources to maintain enterprise apps, it is generally not scalable to have someone manually provision the resources. It also makes it more difficult to iterate on the resources when new versions of software or patches need to be pushed to the infrastructure. 

***How it helps***

By representing the data center resources such as servers, load balancers, and subnets as code, it allows infrastructure teams to have a single source of truth for all configurations and also allows that to manage their data center in a CI/CD pipeline, implementing version control and deployment strategies. 

### Kubernetes

Status: In Progress

***What it is***

Kubernetes (K8s) is an open-source technology, originally created by Google, that manages, or orchestrates, containers across clusters. Just like there is an OS that manages your laptop, Kubernetes manages cluster resources for the containerized apps. and  automates software deployment, scaling, and management. 

***Problem it addresses***

Before Kubernetes, software deployment and management was very manual, labor intensive and required hands-on work from developers and engineers 24x7.  Often testing , QA, deployment, maintenance and hosting resource configuration and allocation was done by different people at different times using different tools over many man hours. This can lead to higher cost and is more prone to errors which can lead to security vulnerabilities.

***How it helps***

Kubernetes enables you to pre-wire your environment to have automation for software deployment testing, batch execution, application scaling, load balancing, storage, hosting resources and monitoring. The automation saves money by both reducing the amount of time spent and resources used for deployment and hosting while making your application more secure and improving its performance and the end user experience.

### Loosely coupled architectures

Status: Feedback Appreciated

***What it is***

A loosely coupled architecture is a system design approach in which an application has little knowledge or reliance on a separate application. Microservices are an example of this architectural approach with a focus on narrowing an application's external dependencies. 
Loosely coupled architecture is the opposite of tightly coupled architecture.

***Problem it addresses***

When applications and processes are reliant on each other, the development lifecycle also needs to be intertwined. Updates, scaling, testing, and new features will be implemented against more extensive codebase. The larger the codebase and its dependencies, the more the application can be considered a monolith.

***How it helps***

By decoupling an application, application development will be quicker since external dependencies will not hamper it. At an organizational level, teams can be structured around their competency, focusing on the specific application.

### Microservices - Daniel Jones

Status: In Progress

***What it is***

Microservices is an architectural approach where an application is broken down into multiple smaller components, or microservices. Each microservice does some work when requested, and also has a well-defined single responsibility. A legacy online store might be deployed as one large application (pejoratively referred to as a “monolith”) that handles baskets, customers, inventory and checkouts. By contrast a Microservices-based system would separate each of these functions out into individual Microservices - so a ‘Basket Microservice’, ‘Customer Microservice’ and so on. 

***Problem it addresses***

Different parts of an application may need to be scaled separately - for instance in an online store there are going to be many more product views than checkouts, and so we may need to have more copies of the product logic running than the checkout logic. In a monolithic application, we can’t deploy those bits of logic separately, and instead we have to duplicate the entire app, which leads to inefficient use of resources. In addition, we cannot update only the product logic without also updating the checkout logic. This dependency forces us into big batches of change, which are riskier.

Monolithic applications also make it easy for developers to succumb to design pitfalls. Because all the code is in one place, it is easier to make that code tightly-coupled and harder to enforce the principle of separation of concerns.

***How it helps***

Separating areas of functionality into different Microservices makes it easier to deploy, update and scale them independently. Storing each Microservice in its own source code repository also means that it is harder for developers to entangle unrelated areas of functionality, ensuring that they can remain independent. Whilst Microservices solve many problems, they create operational overhead in that the number of things to deploy and keep track of increases by an order of magnitude or more. Many cloud-native technologies aim to make Microservices easier to deploy and manager.

### Monolithic application

Status: In Progress

***What it is***

A monolithic application is one that contains all functionality in a single deployable program. This is often the simplest and easiest place to start when making an application, however, once the application grows in complexity, monoliths can become hard to maintain. Many developers will all need to be changing the same codebase, which increases the likelihood of conflicting changes, and increases the need for interpersonal communication between developers.

***Problem it addresses***

Devolving an application into microservices increases operational overhead, as there are more things to test, deploy, and keep running. Early in a product’s lifecycle it may be advantageous to defer this complexity and build a monolithic application until the product is determined successful.

***How it helps***

A well-designed monolith can uphold lean principles, by being the simplest way to get an application up-and-running. When the business value of the monolithic application has been proven, action can be taken to decompose the monolith into microservices. Crafting an application as microservices before it is proven to be valuable, may be a premature spending of engineering effort, and if the application yields no value then that effort becomes waste.

### Nodes

Status: Feedback Appreciated

***What it is***

A node is a computer that works in concert with other computers, or nodes, to accomplish a common task. When we talk about cloud native platforms a node could be a physical computer, a virtual computer, referred to as a VM, or even a container.

***Problem it addresses***

A node exists to run apps or processes as part of a group of computers. A node is part of a cluster, or group, of nodes that works together in concert.

***How it helps***

A node gives you a distinct unit of compute, memory/cpu/network, that you can assign to a cluster. In a cloud native platform or app a node represents a single unit that can perform work. Ideally, individual nodes are undifferentiated in that any one node of a particular type is indistinguishable from any other node of the same type.

### Openness (concept) 

Status: No Definition - Needs Work

***What it is***

***Problem it addresses***

***How it helps***

### Portability

Status: No Definition - Needs Work


***What it is***

***Problem it addresses***

***How it helps***

### Reliability

Status: In Progress

***What it is***

Reliability is the property of a system to be responsive in the presence of failure.

***Problem it addresses***

A system's responsiveness, that is, its ability to meet its service level objectives, is a function of load and failure. Increased presence of load or an increased presence of failure leads to a decrease of responsiveness.

***How it helps***

Reliability ensures a system is responsive in the presence of failure. However, Reliability does not ensure a system is responsive in the presence of load (See Scalability)

### Scalability and auto-scaling

Status: In Progress

***What it is***

Scalability is the property of a system to be responsive in the presence of load.

***Problem it addresses***

A system's responsiveness, that is, its ability to meet its service level objectives, is a function of load and failure. Increased presence of load or an increased presence of failure leads to a decrease of responsiveness.

***How it helps***

Scalability ensures a system is responsive in the presence of load. However, Scalability does not ensure a system is responsive in the presence of failure (See Reliability)

### Self-healing

Status: In Progress

***What it is***

A self-healing system is one that is capable of recovering from certain types of failure without any human intervention.

***Problem it addresses***

For better or worse, there are often failure cases in systems that are known and expected. Most enterprises have one or many systems that are known to crash on a regular basis, and need manual intervention to be restarted. Wouldn’t it be nice if there was an automated system that detected these crashes, and restarted the system for you?

***How it helps***

A self-healing system has a ‘convergence’ or ‘control’ loop that actively looks at the actual state of the system, and compares it to the state that the operators originally desired. If there is a difference (e.g. there are fewer application instances running that desired) it will take corrective action (in our example, starting new instances). 

### Client-server architecture

Status: In Progress

***What it is***

A client-server architecture is one where the logic that makes up an application is split between two or more components: a client that asks for work to be done (e.g. the GMail web application running in your web browser), and one or more servers that satisfy that request (e.g. the ‘send email’ service running on Google’s computers in the cloud). This is in contrast to legacy applications which were typically self-contained (such as desktop apps in the 1990’s) and did all the work in one place (in our example the email is sent by Google’s computers rather than your own).

***Problem it addresses***

Self-contained applications cannot be updated regularly, as users would need to download and install the latest versions. Data would need to be ‘baked in’ to the application when it is packaged, meaning it cannot change until the app is updated, and users could not share a view of data. Imagine having to download all of Amazon’s product catalogue to your own computer before being able to browse it!

***How it helps***

By implementing application logic in a remote server or service, operators can update that without needing to change logic in the client. This means that updates can be made much more frequently. Storing data on the server allows many clients to all see and share the same data. Consider the difference between using an online word processor, compared to a traditional offline word processor. In the former your files exist server-side, and can be shared with other users who simply download them from the server. In the legacy world, files needed to be copied to removable media (floppy disks!) and shared with individuals.

### Service

Status: In Progress

***What it is***

“Service” is a term with more meanings than virtually any other used in IT today. Traditionally a service represented a software system of which requests were made, as opposed to ‘fat client’ applications where all logic was contained in the program running on a user’s desktop. 
In the context of Kubernetes the term service has a very specific meaning - something running in a Kubernetes cluster, that may be implemented by many instances, and that other workloads may wish to communicate with via an IP address. 
In other contexts, a service might mean a web service (one that communicates via HTTP(S)), a data service (databases, message queues, caches) or microservices (applications embodying the service design pattern with a single responsibility).

***Problem it addresses***

Services in Kubernetes allow workloads to communicate with an application without knowing how many instances of it are running, or the IP addresses of all of those instances. 

***How it helps***

A Kubernetes Service registers a new IP address and forwards traffic on to the workloads that implement the required functionality. The removes the need for clients of that application to know about and track the addresses of all of the instances of the application, thus reducing complexity and overhead for developers.

### Service discovery

Status: Feedback Appreciated

***What it is***

Modern applications are composed of multiple individual services that need to collaborate to provide value to the end user. To collaborate, they communicate over a network, and to communicate, they must first locate one another. Service discovery is the process of figuring out how to do that.

***Problem it addresses***

Cloud native architectures are dynamic and fluid, meaning they are constantly changing. When a container crashes on one node, a new container is spun up on a different node to replace it. Or, when an app scales, replicas are spread out throughout the network. There is no one place where a particular service is; the location of everything is constantly changing. Service discovery keeps track of services within the network so services can find one another when needed. 

***How it helps***

Service discovery tools address this problem by providing a common place to find and potentially identify individual services. There are basically two types of tools in this category: (1) Service discovery engines are database-like tools that store info about what services exist and how to locate them. And (2) name resolution tools (e.g. Core DNS) receive service location requests and return network address information.

### Service mesh

Status: Feedback Appreciated

***What it is***

In a microservices world, apps are broken down into multiple smaller services (app components) that communicate over a network. Just like the wifi network you're connected to, computer networks are inherently unreliable, hackable, and often slow. 

Service meshes address this new set of challenges by managing traffic (i.e. communication) between services and adding reliability, observability, and security features uniformly across all services. 

***Problem it addresses***

Having moved to a microservices architecture, engineers are now dealing with hundreds possibly even thousands of individual services, all in need to communicate. That means a lot of traffic is going back and forth over the network -- your system’s new Achilles heel. To address this, the engineering team must implement additional functionality. 

***How it helps***

Service meshes add reliability, observability, and security features uniformly across all services across a cluster without requiring code changes. Prior to service meshes, that functionality had to be encoded into every single service, becoming a potential source of bugs and technical debt.

### Service proxy

Status: Feedback Appreciated

***What it is***

A service proxy intercepts traffic to or from a given service, applies some logic to it, then forwards that traffic to another service. It essentially acts as a “go-between” that collects information about network traffic and/or applies rules to it. 

***Problem it addresses***

To keep track of service to service communication (aka network traffic) and potentially transform or redirect it, we need to collect data. Traditionally, the code enabling data collection and network traffic management was embedded within each application.  

A service proxy allows us to “externalize” this functionality. No longer does it need to live within the apps. Instead, it’s now embedded into the platform layer (where your apps run).  

***How it helps***
Acting as gatekeepers between services, proxies provide insight into what type of communication is happening. Based on their insight, they determine where to send a particular request or even deny it entirely. 

Proxies gather critical data, manage routing (spreading traffic evenly among services or rerouting if some services break down), encrypt connections, and cache content (reducing resource consumption). 

### Stateful (vs. Stateless) Applications

Status: Feedback Appreciated

***What is it?***

In a Kubernetes environment, stateful applications store state information generated from requests. To run, all pods within a stateful container must have a local volume of persistent storage. By contrast, stateless applications are containerized microservices that have a single function or service. They leverage a server to process requests, but the server doesn’t retain state information between requests, and different requests can be processed by different servers. They don’t require storage to run, because they don’t retain any data.

***Problem addressed***

Stateless applications tackle the problem of resiliency, because different pods across a cluster can work independently, with multiple requests coming to them at the same time. If there’s a problem, you can easily restart the application, and it will return to its initial state with little or no downtime. As such, the benefits of stateless applications include resiliency, elasticity, and high availability. However, most applications we use today are at least partly stateful, as they store things like preferences and settings to improve the user experience.

***How it helps***

Depending on what application you’re deploying, you may choose to use either stateful or stateless. Stateless containers are easier to deploy, and you don’t need to worry about saving container data on persistent storage volumes. You also don't have to worry about backing up the data. However, if your application needs to retain state information to do what it’s supposed to do, stateful is the only option. If you choose stateful, make sure you have a Kubernetes-native backup solution to prevent accidental data loss or corruption.

### Tightly coupled architectures - Michael Foster
Status: No Definition - Needs Work

***What it is***

***Problem it addresses***

***How it helps***

### Virtualization

Status: Feedback Appreciated

***What it is***

Virtualization, in the context of cloud native computing, refers to the process of taking a physical computer, sometimes called a server, and allowing it to run multiple isolated operating systems. Those isolated operating systems and their dedicated compute resources (CPU, memory, network) are referred to as virtual machines, or VMs. So when we talk about a virtual machine we’re talking about a software defined computer. Something that looks and acts like a real computer but is sharing hardware with other virtual machines. An example being a computer you lease from AWS, Amazon Web Services.

***Problem it addresses***

Virtualization is intended to address a few problems, the main two being: 1) Improve physical hardware usage allowing more apps to run on the same machine. 2) Enable users to speed up the time to get a new virtual computer.

***How it helps***

With virtualized environments, e.g. a datacenter (a group of physical computers connected together), more apps can run on the same number of computers. It also allows the users of the datacenter to spin up a new "computer" (aka a VM) in minutes without worrying about the physical constraints of adding a new computer to a datacenter.

