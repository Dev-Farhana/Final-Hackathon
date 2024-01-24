const express = require('express');
const router = express.Router();

const Signup = require('../models/Signup');
const Login = require('../models/Login');
const Project = require('../models/Project'); 

router.get('/', (req, res) => {
    res.send('Hello, Express! Hello from the routes!');
  });
  
// Define a route to handle form submissions
router.post('/submit', async (req, res) => {
  const { projectTitle, developerName, description, hostedURL } = req.body;
  try {
    // Validate the form data
    if (!projectTitle || !developerName || !description || !hostedURL) {
      return res.status(400).send({message : 'All fields are required'});
    }
    // Create a new project instance
    const project = new Project({
      projectTitle,
      developerName,
      description,
      hostedURL,
    });

    // Save the project to the database
    await project.save();
    res.send({message: 'Project submitted successfully!'});
  } catch (error) {
    console.error(error);
    res.status(500).send({message: 'Internal Server Error'});
  }
});

// Define a route to display all submitted projects
router.get('/projects', async (req, res) => {
  try {
    // Fetch all projects from the database
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).send({message:'Internal Server Error'});
  }
});

router.get("/projects/:id", async (req,res) => {
  let projects ;
  const id = req.params.id;
  try{
      projects =  await Project.findById(id);
      res.status(200).json({projects});
  }
  catch(err){
      console.log("Error opps!", err);
  }
})

router.put("/updateprojects/:id", async(req,res) => {
  const id = req.params.id ;
  const {projectTitle, developerName, description,  hostedURL} = req.body;
 try{
    const updatedProject =  await Project.findByIdAndUpdate(id,{
      projectTitle, developerName, description,  hostedURL
      });
      await updatedProject.save().then( res.status(200).json({updatedProject}))  
 }
 catch(err){
  console.log("Error opps!", err);
 } 
})


// Example route to handle user registration
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await Login.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = new Login({ email, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;


