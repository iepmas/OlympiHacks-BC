const AboutUs = () => {
//   const people = [
//     {
//       name: "Nadeem Said",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus lectus vel tristique euismod. Ut hendrerit velit quis arcu ullamcorper tincidunt. Mauris interdum ultrices massa id bibendum.",
//       image: nadeemImage,
//     },
//     {
//       name: "Christian Florea",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus lectus vel tristique euismod. Ut hendrerit velit quis arcu ullamcorper tincidunt. Mauris interdum ultrices massa id bibendum.",
//       image: christianImage,
//     },
//     {
//       name: "Samuel Pei",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus lectus vel tristique euismod. Ut hendrerit velit quis arcu ullamcorper tincidunt. Mauris interdum ultrices massa id bibendum.",
//       image: samuelImage,
//     },
//     {
//       name: "Jonathan Kao",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus lectus vel tristique euismod. Ut hendrerit velit quis arcu ullamcorper tincidunt. Mauris interdum ultrices massa id bibendum.",
//       image: jonathanImage,
//     },
//   ];

  return (
    <div style={{textAlign:'center'}}>
     
        <div style={{ color: "white", marginBottom: "20px", display: "flex", alignItems: "center"}}>
          <img src='nadeem.png' alt='Nadeem' style={{ marginRight: "10px", width: "200px", height: "200px", borderRadius: "50%" }} />
          <div>
            <h2>Nadeem Said</h2>
            <p>
Nadeem is a dedicated athlete, representing both the Waterloo Warriors Varsity Swim Team and the Jordanian National Swimming Team. Balancing intense training with his studies, Nadeem devotes over 15 hours a week to swimming. As an aspiring learner, he is passionate about programming and creating innovative solutions that simplify life. Witnessing people benefit from his creations brings him immense joy. Born on April 10th, 2002, in Amman, Jordan, Nadeem moved to Canada to pursue his undergraduate degree at the University of Waterloo. In his free time, he enjoys playing the drums, exercising, watching movies/TV shows, and exploring new recipes. With expertise in Python, C#, C++, and more, Nadeem developed this website using frameworks like Streamlit and Pillow to connect and engage with others. Actively seeking new opportunities, he takes advantage of the University of Waterloo's Co-Op program.</p>
          </div>
        </div>

        <div style={{ color: "white", marginBottom: "20px", display: "flex", alignItems: "center" }}>
          <img src='./chris.png' alt='Chris' style={{ marginRight: "10px", width: "200px", height: "200px", borderRadius: "50%" }} />
          <div>
            <h2>Christian Florea</h2>
            <p>👋 Hey there! 

🚀 I am a software developer currently studying Mechatronics Engineering at the University of Waterloo, and I have a passion for exploring the world of tech and engineering. I am approaching 2 years of professional experience developing full-stack web apps, GUI applications, and control systems software. I gained this experience through 5 different internships at a wide variety of companies and teams.

💻 I am proficient in Python, C++, and JavaScript, as well as web development tools like React, Redux, Node.js, and Express.js. I'm excited to bring my skills to an internship role and continue growing as a developer. 

🏊‍♂️ Outside of school and work, I enjoy swimming as a part of the Waterloo varsity swim team as well as traveling and exploring the world.</p>
          </div>
        </div>
      

        <div style={{ color: "white", marginBottom: "20px", display: "flex", alignItems: "center" }}>
          <img src='./sam.png' alt='Sam' style={{ marginRight: "10px", width: "200px", height: "200px", borderRadius: "50%" }} />
          <div>
            <h2>Samuel Pei</h2>
            <p>Sam, from Vancouver, BC, excels in swimming and academics. He's a third-year Computer Science student at Waterloo University, passionate about solving complex problems and exploring software development. With excellent time management skills, he successfully balances his swimming commitments and studies. His dedication drives him to make a positive impact in both his athletic and academic pursuits.</p>
          </div>
        </div>
      

        <div style={{ color: "white", marginBottom: "20px", display: "flex", alignItems: "center" }}>
          <img src='./jon.png' alt='Jon' style={{ marginRight: "10px", width: "200px", height: "200px", borderRadius: "50%" }} />
          <div>
            <h2>Jonathan Kao</h2>
            <p>Hey there! I'm Jonathan, a third-year swimmer representing the University of Waterloo. Currently, I'm pursuing my passion for Computer Science and diving deep into the world of coding. Balancing my athletic commitments with my academic pursuits has taught me valuable skills like discipline, time management, and perseverance.</p>
          </div>
        </div>
      
      
    </div>
  );
};

export default AboutUs;
