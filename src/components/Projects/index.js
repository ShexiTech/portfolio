import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'laravel' ?
            <ToggleButton active value="web app" onClick={() => setToggle('laravel')}>Laravel</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('laravel')}>Laravel</ToggleButton>
          }
          <Divider />
          {toggle === 'codeigniter' ?
            <ToggleButton active value="android app" onClick={() => setToggle('codeigniter')}>CodeIgniter</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('codeigniter')}>CodeIgniter</ToggleButton>
          }
          <Divider />
          {toggle === 'shopify' ?
            <ToggleButton active value="android app" onClick={() => setToggle('shopify')}>Shopify</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('shopify')}>Shopify</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects