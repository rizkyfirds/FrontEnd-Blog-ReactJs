import React from "react";
import page3 from "../image/p3.jpg";
import page4 from "../image/p4.jpg";
import page5 from "../image/p5.jpg";

function Blog() {
    return (
        <div>
            <div className="flex">
                <div className="w-full max-h-screen h-screen bg-cover bg-center bg-bgHome">
                    <div className="mt-8 mx-auto w-5/6 h-12">
                        <div className="grid gap-8 grid-cols-12 h-full">
                            <div className="col-span-2 mx-auto my-auto text-4xl text-white font-bold font-Lexend Deca">
                                team.
                            </div>
                            <div className="col-span-4"></div>
                            <div className="mx-auto my-auto text-lg text-white font-Lexend Deca underline">
                                Product
                            </div>
                            <div className="mx-auto my-auto text-lg text-white font-Lexend Deca underline">
                                Blog
                            </div>
                            <div className="mx-auto my-auto text-lg text-white font-Lexend Deca underline">
                                Support
                            </div>
                            <div className="mx-auto my-auto text-lg text-white font-Lexend Deca underline">
                                Login
                            </div>
                            <div className="col-span-2 bg-[#5468E7]/80 py-2 text-center text-lg text-white font-bold font-Lexend Deca rounded-md">
                                Get Access
                            </div>
                        </div>
                        <div className="w-1/3 h-80 my-56 left-8">
                            <div className="text-4xl text-white font-bold font-Lexend Deca">
                                Instant collaboration for remote teams
                            </div>
                            <div className="my-4 text-base text-white font-Lexend Deca">
                                All-in-one place for your remote team to chat, collaborate and track project progress.
                            </div>
                            <div className="grid gap-4 grid-cols-3">
                                <div className="col-span-2 bg-[#F5F5F5] py-2 pl-4 text-sm text-[#7676B2]/60 font-bold font-Lexend Deca rounded">
                                    Email
                                </div>
                                <div className="bg-[#5468E7] py-2 text-center text-sm text-[#F5F5F5] font-bold font-Lexend Deca rounded">
                                    Get Early Access
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-full max-h-screen h-screen bg-cover bg-center bg-primary">
                    <div className="flex">
                        <div className="w-1/2 max-h-screen h-screen my-auto px-48">
                            <div className="text-5xl text-[#232340] font-bold font-Lexend Deca mt-60">
                                Chats for your distributed teams
                            </div>
                            <div className="text-sm text-[#232340]/90 font-Lexend Deca my-4 font-medium">
                                Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
                            </div>
                            <div className="text-sm text-[#5468E7] underline font-semibold font-Lexend Deca mt-8">
                                Learn more
                            </div>
                        </div>
                        <div className="w-1/2 max-h-screen h-screen">

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-full max-h-screen h-screen bg-cover bg-center bg-primary">
                    <div className="flex">
                        <div className="w-1/2 max-h-screen h-screen my-auto pl-20">
                            <img src={page3} alt="" className="m-auto h-3/4 pt-8" />
                        </div>
                        <div className="w-1/2 max-h-screen h-screen mx-auto pr-28">
                            <div className="w-3/4">
                                <div className="text-5xl text-[#232340] font-bold font-Lexend Deca mt-60">
                                    Chats for your distributed teams
                                </div>
                                <div className="text-sm text-[#232340]/90 font-Lexend Deca my-4 font-medium">
                                    Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.
                                </div>
                                <div className="text-sm text-[#5468E7] underline font-semibold font-Lexend Deca mt-8">
                                    Learn more
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-full max-h-screen h-screen bg-cover bg-center bg-primary">
                    <div className="flex">
                        <div className="w-1/2 max-h-screen h-screen my-auto px-48">
                            <div className="text-5xl text-[#232340] font-bold font-Lexend Deca mt-60">
                                Choose how you want to work
                            </div>
                            <div className="text-sm text-[#232340]/90 font-Lexend Deca my-4 font-medium">
                                In Team, you have got all the flexibility to work when, where and how its best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.
                            </div>
                            <div className="text-sm text-[#5468E7] underline font-semibold font-Lexend Deca mt-8">
                                Learn more
                            </div>
                        </div>
                        <div className="w-1/2 max-h-screen h-screen">
                            <img src={page4} alt="" className="m-auto h-3/4 pt-8" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-full max-h-screen h-screen bg-cover bg-center bg-primary">
                    <div className="flex">
                        <div className="w-1/2 max-h-screen h-screen my-auto pl-20">
                            <img src={page5} alt="" className="m-auto h-3/4 pt-8" />
                        </div>
                        <div className="w-1/2 max-h-screen h-screen mx-auto pr-28">
                            <div className="w-3/4">
                                <div className="text-5xl text-[#232340] font-bold font-Lexend Deca mt-60">
                                    Move faster with your Team tools
                                </div>
                                <div className="text-sm text-[#232340]/90 font-Lexend Deca my-4 font-medium">
                                    With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.
                                </div>
                                <div className="text-sm text-[#5468E7] underline font-semibold font-Lexend Deca mt-8">
                                    Learn more
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-full max-h-screen h-screen bg-cover bg-center bg-primary">
                    <div className="text-5xl text-[#232340] font-bold font-Lexend Deca mt-48 text-center">
                        What people say about Team
                    </div>
                    <div className="w-60 h-72 bg-[#FFFFFF] m-2 place-items-center mx-auto mt-8">
                        <div className="grid gap-2 grid-rows-5">
                            <div className="">

                            </div>
                            <div className="row-span-3 text-sm text-[#232340]/90 font-Lexend Deca my-4 font-medium m-4">
                                Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.
                            </div>
                            <div className="">

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-full h-96 bg-cover bg-center bg-[#232340]">
                    <div className="grid gap-8 grid-cols-7 h-full">
                        <div className="col-span-2 mx-auto my-20 text-4xl text-white font-bold font-Lexend Deca">
                            team.
                        </div>
                        <div className="mx-auto my-20 text-lg text-[#5468E7] font-Lexend Deca">
                            Company
                        </div>
                        <div className="mx-auto my-20 text-lg text-[#5468E7] font-Lexend Deca">
                            Features
                        </div>
                        <div className="mx-auto my-20 text-lg text-[#5468E7] font-Lexend Deca">
                            Contact Us
                        </div>
                        <div className="col-span-2 mx-auto my-20 text-lg text-[#5468E7] font-Lexend Deca">
                            Stay up to date
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;