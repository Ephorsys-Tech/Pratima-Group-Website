import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Example() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="max-w-80 bg-black text-white rounded-2xl">
                    <div className="relative -mt-px overflow-hidden rounded-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" 
                            alt="Testimonial 1" 
                            className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" 
                        />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                    </div>
                    <div className="px-4 pb-4">
                        <p className="font-medium border-b border-gray-600 pb-5">“Radiant made undercutting all of our competitors an absolute breeze.”</p>
                        <p className="mt-4">— Sarah Jenkins</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">Content Marketing</p>
                    </div>
                </div>
                <div className="max-w-80 bg-black text-white rounded-2xl">
                    <div className="relative -mt-px overflow-hidden rounded-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" 
                            alt="Testimonial 2" 
                            className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" 
                        />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                    </div>
                    <div className="px-4 pb-4">
                        <p className="font-medium border-b border-gray-600 pb-5">“The high precision engineering and continuous support transformed our production volume completely.”</p>
                        <p className="mt-4">— Ramesh Mohanty</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">Industrial Operations</p>
                    </div>
                </div>
                <div className="max-w-80 bg-black text-white rounded-2xl">
                    <div className="relative -mt-px overflow-hidden rounded-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" 
                            alt="Testimonial 3" 
                            className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" 
                        />
                        <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                    </div>
                    <div className="px-4 pb-4">
                        <p className="font-medium border-b border-gray-600 pb-5">“Remarkable uptime and effortless operator training. Best manufacturing decision we made.”</p>
                        <p className="mt-4">— John Doe</p>
                        <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">Operations Director</p>
                    </div>
                </div>
            </div>
        </>
    );
};

