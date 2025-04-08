<template>
  <div id="app">
    <!-- University Header (Top) -->
    <header>
      <div class="university-header">
        <img src="./assets/school_logo.png" alt="School Logo" class="school-logo" />
        <div class="title-container">
          <h1 class="noto-sans-custom">Development of mobile sign language teaching system based on deep learning</h1>
          <p class="participants-name">Peng Shuo, Wang Xuran, Zhang Shixin, Li Meijie</p>
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <main>
      <!-- Introduction Block -->
      <section class="section">
        <h2 class="section-title">Introduction</h2>
        <div class="content-block">
          <p>
            This study aims to develop an <strong>interactive sign language learning system</strong> based on <strong>Android</strong> to enhance the language acquisition abilities of deaf and hard-of-hearing individuals, improve their social accessibility, facilitate smoother communication, and ultimately enhance their quality of life. Sign language serves as the primary means of communication for millions of deaf individuals worldwide. However, due to its limited prevalence in society, many deaf and hard-of-hearing individuals face communication barriers in daily life, leading to social isolation and difficulties in accessing essential services. Therefore, developing an innovative sign language learning application can help increase the adoption of sign language, bridge the communication gap between hearing and deaf individuals, and promote social inclusion.  
            <br><br>
            The proposed Android application will draw inspiration from successful language-learning platforms and offer a <strong>personalized learning path</strong>. Key features will include a comprehensive sign language dictionary, practice modes, progress tracking, bookmark, and review mechanisms for incorrect answers, providing an intuitive and customized learning experience to enhance user engagement. Furthermore, we aim to integrate advanced <strong>motion tracking</strong> and <strong>deep learning-based</strong> gesture recognition technology to enable real-time gesture recognition and feedback, allowing users to practice gestures interactively. 
            To achieve this the study will employ <strong>YOLO</strong> and <strong>ResNet50</strong> models for static hand gesture keypoint detection while dynamic recognition will integrate an existing <strong>LSTM-based</strong> real-time sign language recognition model.
            Additionally, the application is planned to support multiple sign language variants, such as American Sign Language (ASL) and International Sign Language (ISL), to cater to users from different regions.  
            <br><br>
            Ultimately, this study aims to develop an efficient and user-friendly sign language teaching system that facilitates <strong>barrier-free communication</strong> between hearing and deaf individuals while promoting the widespread adoption of sign language. Through this system, we hope to help deaf and hard-of-hearing individuals better integrate into society, reduce inequalities in information access, and provide them with equal learning and employment opportunities in an increasingly digital world.
          </p>
        </div>
      </section>

      <!-- Design Philosophy Block -->
      <section class="section">
        <h2 class="section-title">Design Philosophy</h2>
        <div class="content-block text-left-image-right">
          <div class="text-container">
            <p>
              We use a typical system design that separates the mobile end from the back end: the <strong>UI Layer</strong> interacts directly with the user and through the <strong>communication layer</strong> interacts with the service layer. The <strong>service layer</strong> handles the main business logic and communicates with the algorithm side to call the AI model (e.g. YOLO-tiny, Resnet50). The <strong>persistence layer</strong> is responsible for long-term storage and efficient access to data. The whole system adopts hierarchical design, and the division of labor between different modules is clear and decoupled, which is easy to maintain and expand.
            </p>
          </div>
          <div class="image-container">
            <img src="./assets/picture2.jpg" alt="Design Philosophy" class="research-image design-image" />
          </div>
        </div>
      </section>



      <!-- Interface Display Block -->
      <section class="section">
        <h2 class="section-title">UI Display</h2>
        <!-- Background Container for Images -->
          <!-- Images Row -->
          <div class="images-row">
            <img src="./assets/interface1.jpg" alt="Interface Image 1" class="interface-image"/>
            <img src="./assets/interface2.jpg" alt="Interface Image 2" class="interface-image"/>
            <img src="./assets/interface3.jpg" alt="Interface Image 3" class="interface-image"/>
          </div>
      </section>


      <!-- Algorithm Research Block -->
      <section class="section">
        <h2 class="section-title">Algorithm Research</h2>
        <div class="content-block">
          <div class="image-container">
            <img src="./assets/picture1.jpg" alt="Algorithm Research" class="research-image" />
          </div>
          <div class="text-container">
            <p>
              <strong>Sign Posebased Transformer (SPT)</strong> 
              <br><br>
              SPT leverages a Transformer architecture combined with keypoint data, eliminating the dependency on optical flow or RGB information in traditional methods——great potential in the usage of such recognition system on hand-held devices.
              <br><br>
              <strong>Methodology</strong>
              <br><br>  
              The input is a video sequence → pose estimation → keypoint selection → input to the Transformer;
              The final output is the corresponding sign language word label.
              Extracts hand, body, and facial keypoints using OpenPose and MediaPipe.  
              Applies normalization and data augmentation (rotation, scaling, and temporal perturbation).
              <br><br>
              <strong>Experiments & Results</strong>
              <br><br>
              Datasets: The WLASL (Word-Level American Sign Language) dataset is used.
              <br><br>
              Performance metrics: Top1 Accuracy & Word Error Rate (WER).  
            </p>
          </div>
          <p>Achieving 63.18% accuracy, the proposed method outperforms the previous state-of-the-art pose-based approach by over 3 percentage points on WLASL100. Despite reduced dimensionality and the absence of a backbone, it approaches the baseline I3D model with only a 3% difference in test accuracy.
              <br><br>
              <strong>Advantages</strong>
              <br><br>
              Low computational cost: Works with keypoints instead of highdimensional RGB video.  
              <br><br>
              Enhanced temporal modeling: Transformer architecture improves dynamic gesture recognition.
              <br><br>  
              High robustness: Less sensitive to lighting and background variations, making it suitable for realtime sign language recognition.
              <br><br>
              <strong>Integration into the app:</strong>  
              <br><br>
              Integrate MediaPipe or a similar library for skeleton keypoint detection; implement real-time processing of camera frames; extract and format keypoint data.
              <br><br>
              <strong>Reference</strong>: 
              <br><br>
              Bohacek, M., & Hruz, M. (2022). Sign pose-based transformer for word-level sign language recognition. 2022 IEEE/CVF Winter Conference on Applications of Computer Vision Workshops (WACVW), 182–191. https://doi.org/10.1109/wacvw54805.2022.00024 
              <br><br>
              git: https://github.com/matyasbohacek/spoter/tree/main
            </p>
        </div>
      </section>


      <!-- Milestones Table -->
      <section class="section">
        <h2 class="section-title">Project Milestones</h2>
        <div>
          <table border="1">
            <thead>
              <tr>
                <th>Milestones</th>
                <th>Tasks</th>
                <th>Estimated completion time</th>
                <th>Estimated number of learning hours</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background-color: #90EE90;"> <!-- Green color for completed milestone -->
                <td>1</td>
                <td>Build the front and rear system frames, build the webpage, core algorithm learning and research</td>
                <td>March 10, 2025 - April 10, 2025</td>
                <td>100h</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Static identification algorithm deployment and system horizontal function development</td>
                <td>April 10, 2025 - May 5, 2025</td>
                <td>60h</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Dynamic identification algorithm deployment and function expansion</td>
                <td>May 5, 2025 - May 31, 2025</td>
                <td>60h</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Interim Report and Presentation</td>
                <td>June 1, 2025</td>
                <td>-</td>
              </tr>
              <tr>
                <td>5</td>
                <td>System vertical function development</td>
                <td>June 1, 2025 - June 30, 2025</td>
                <td>40h</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Make feature improvements, optimizations, changes and webpage improvements</td>
                <td>July 1, 2025 - July 7, 2025</td>
                <td>20h</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Write Final Report</td>
                <td>July 7, 2025 - July 15, 2025</td>
                <td>20h</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Project Report and Oral Examination</td>
                <td>After July 15, 2025</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
    <!-- Footer -->
    <footer>
      <div class="footer-content">
        <p>Contact us: o8o81oo4@connect.hku.hk.com</p>
        <p>Phone: +852 5957 2617</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { createRouter, createWebHistory } from 'vue-router';
import ProjectProgress from './components/ProjectProgress.vue';

export default {
  name: 'App',
  components: {
    ProjectProgress
  }
};
</script>

<style>
footer {
  background-color: #ffffff;
  padding: 1px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  flex-direction: column;
  font-family: 'Google Sans', sans-serif;
  margin-top: auto; /* Ensures footer sticks to the bottom */
}

.footer-content {
  text-align: center;
  color: #545454;
}

footer p {
  margin: 5px 0;
  font-size: 14px;
}

footer strong {
  color: #333;
}
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Arial', sans-serif;
  text-align: left;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.research-image {
  float: left; 
  margin-right: 25px; 
  width: 300px; 
  height: auto; 
}
header {
  background-color: #ffffff;
  padding: 1px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  flex-direction: column;
  font-family: 'Google Sans', sans-serif;
}

.university-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.university-header h1 {
  color: #545454;
  margin-bottom: 5px;
}

.participants-name {
  font-size: 16px;
  color: #666666;
}

.school-logo {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

main {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.content-block {
  background-color: #f4f4f4;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
}

.content-block p {
  font-size: 16px;
  color: #000000;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #e2e2e2;
}
.section-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px; /* Space between title and content block */
  text-align: center; /* This line centers the title */
}
.text-container {
  overflow: hidden; 
}
.images-row {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.interface-image {
  width: 15%;
  height: auto;
}
.text-left-image-right {
  display: flex;
  flex-direction: row; /* Text on left, image on right */
  align-items: center;
}

.text-left-image-right .text-container {
  margin-right: 20px; /* Space between text and image */
}

.text-left-image-right .research-image {
  float: right;
  width: 700px;
  height: auto;
}
</style>