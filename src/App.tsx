import './App.css'

import projThumb from "./assets/bluesky_post_scheduler_thumb.png"
import profilePic from './assets/pfp.jpg'
import { ProjectCard } from './Project'




function App() {

    return (
        <>
            <div className='absolute left-0 top-0 right-0 pt-4 bg-rose-300 rounded-lg'>
                <Banner>
                </Banner>

            </div>
            <div>
                <ProfilePicture></ProfilePicture>
                <AboutMe></AboutMe>
                <div className='pt-2 pb-10'>

                    <ProjectCard image={projThumb} url='https://github.com/1Mochiyuki/bluesky-post-scheduler' projTitle='Bluesky Post Scheduler'></ProjectCard>
                </div>
                <div className='absolute bottom-0 left-0 right-0 '>
                    <Socials></Socials>
                </div>
            </div >
        </>
    )
}

function AboutMe() {
    return (

        <div className='mt-12 bg-dark-gray p-2 rounded-lg border-rose-300 border-2'>
            <p className='font-nunito text-lg'>
                Hi, I'm Yuki or staticdots!<br />
                I'm 21 years old and an aspiring software developer mainly working with Go and Svelte.<br />
                I LOVE using the terminal, and have even begun making TUI (Terminal User Interface) apps using <a href='https://github.com/charmbracelet/bubbletea' className='text-rose-300'>Charm</a>.<br />
                I'll be updating this page with finished and in-progress projects I'm working on.<br />
                I'm currently learning <a href='https://www.rust-lang.org/' className='text-rose-300'>Rust</a> and eventually plan to learn <a href='https://ziglang.org/' className='text-rose-300'>Zig</a>.

            </p>
        </div>
    )
}



function Banner() {

    return (
        <div className='flex justify-evenly pb-6'>
            <span className='text-6xl font-nunito font-bold'>♡ YUKI ♡</span>
        </div >
    )
}


function Socials() {
    return (
        <div className='flex justify-evenly pb-4 font-nunito'>
            <a href='https://github.com/1Mochiyuki' className='text-rose-300'>
                {/* <SocialLink name="Github"></SocialLink> */}
                <span>Github</span>
            </a>
            <a href='https://x.com/staticdots' className='text-rose-300'>

                <span>Twitter</span>
            </a>
            <a href='https://bsky.app/profile/staticdots.bsky.social' className='text-rose-300'>
                <span>BlueSky</span>
            </a>

        </div>
    )
}

function ProfilePicture() {
    return (

        <div className='flex justify-center'>
            <img src={profilePic} className='w-52 h-52 rounded-lg border-rose-300 border-2 p-1' />
        </div>
    )
}

export default App
