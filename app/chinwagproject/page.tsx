import React from 'react'

const ChinwagSection = () => {
  return (
    <section className="my-8 pb-8 sm:mx-12 md:pt-8 md:pb-24 lg:px-32 mx-auto">
      <div className="flex flex-col text-center items-center jestify-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Chinwag
        </h1>
        <p className="text-xl leading-16 md-4 text-neutral-600 dark:text-neutral-400">
          To wag one's chin means to have a chat. Chinwag is a native mobile
          application ready to be installed on iOS and Android devices, built
          using React Native. It cosists of a single chat thread and it allows users
          access and share thier device's storage, camera, location and microphone. It also
          allows for limited offline functionality.
        </p>
        <h2 className="text-2xl mt-10 font-bold dark:text-white">
          Project Challenges
        </h2>
        <p className="text-xl leading-16 md-4 text-neutral-600 dark:text-neutral-400">
          The biggest challenge here was working on the front-end, Since the project brief
          was very specific. In terms of look-and-feel there were many small finishing
          touces required which needed to be tested across devices.
        </p>
        <h2 className="text-2xl mt-10 font-bold dark:text-white">
          What I learned
        </h2>
        <p className="text-xl leading-16 md-4 text-neutral-600 dark:text-neutral-400">
          I really enjoyed taking a deep dive into the GiftedChat library. This project gave me
          the confidence to be able to drill down into underlying functions and variables in 
          this library. Understanding at this level allowed me to better use implement the
          UI and fix bugs.
        </p>
        <h2 className="text-2xl mt-10 font-bold dark:text-white">
          Technologies Used</h2>
        <p className="text-xl leading-16 md-4 text-neutral-600 dark:text-neutral-400">
          Expo | React Native | Google Firebase | GiftedChat | Android Studio </p>
        <h2 className="text-2xl mt-10 font-bold dark:text-white">
          Installation
        </h2>
        <div>
          <ol className="list-decimal list-inside">
            <li>Install and use a node version lower than 17, 16.9.0 recommended</li>
            <li>Clone Github repository and install dependencies</li>
            <li>Create a project in Firebase Console and enable Firestore</li>
            <li>Copy the project credentials provided by Firebase to the firebaseConfig constant within app.js</li>
            <li>Run "npm start" in your terminal from the project directory</li>
            <li>Download the Expo Client app on your iOS or Android device</li>
            <li>Open the Expo Client app an dscand the QR code displayed in your terminal</li> 
          </ol>
        </div>
        <a
          href="/#projects"
          className="hover:cursor-pointer text-neutral-100 font-semibold px-6 py-3 mt-10 bg-teal-600 rounded shadow hover:bg-teal-700"
          // activeClass="active"
          // spy={true}
          // smooth={true}
          // offset={-100}
          // duration={500}
              > 
            Back to Projects  
        </a>
      </div>
    </section>    
      )
}

export default ChinwagSection


