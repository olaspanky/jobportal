import React from 'react'
import Link from 'next/link'

const Inbox = () => {
  return (
    <div>
    <div class="w-full bg-white shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar">
                            <div class="w-64 px-4">
                                <div class="h-16 flex items-center">
                                    <a href="#" class="w-48 mx-auto bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-gray-100 py-2 rounded space-x-2 transition duration-150">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                        </svg>
                                        <span>Compose</span>
                                    </a>
                                </div>
                                <div class="px-2 pt-4 pb-8 border-r border-gray-300">
                                    <ul class="space-y-2">
                                        <li>
                                            <a class="bg-gray-500 bg-opacity-30 text-blue-600 flex items-center justify-between py-1.5 px-4 rounded cursor-pointer">
                                                <span class="flex items-center space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                                                    </svg>
                                                    <span>Inbox</span>
                                                </span>
                                                <span class="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">3</span>
                                            </a>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                            <div class="flex-1 px-2">
                                <div class="h-16 flex items-center justify-between">
                                    <div class="flex items-center">
                                        <a href="#" class="flex items-center text-gray-700 px-2 py-1 space-x-0.5 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100" title="Back">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                                            </svg> 
                                            <Link href="/candidate"> <a> <span class="text-sm font-bold">back</span> </a></Link>                                  
                                        </a>
                                        <div class="flex items-center">
                                            <span class="bg-gray-300 h-6 w-[.5px] mx-3"></span>
                                            <div class="flex items-center space-x-2">
                                                <button title="Archive" class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                                                    </svg>
                                                </button>
                                                <button title="Mark As Spam" class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                                    </svg>
                                                </button>
                                                <button title="Delete" class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <span class="bg-gray-300 h-6 w-[.5px] mx-3"></span>
                                            <div class="flex items-center space-x-2">
                                                <button title="Mark As Unread" class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                    </svg>
                                                </button>
                                                <button title="Add Star" class="text-gray-700 px-2 py-1 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="px-2 flex items-center space-x-4">
                                        <div class="flex items-center space-x-2">
                                            <button class="bg-gray-200 text-gray-400 p-1.5 rounded-lg" title="Previous Email">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                            <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1.5 rounded-lg transition duration-150" title="Nex Email">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <h4 class="text-lg text-gray-800 font-bold pb-2 mb-4 border-b-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <img src="https://vojislavd.com/ta-template-demo/assets/img/message3.jpg" class="rounded-full w-8 h-8 border border-gray-500"/>
                                            <div class="flex flex-col ml-2">
                                                <span class="text-sm font-semibold">Betty Garmon</span>
                                                <span class="text-xs text-gray-400">From: bettygarmon@example.com</span>
                                            </div>
                                        </div>
                                        <span class="text-sm text-gray-500">Jan 30, 2022, 10:23 AM</span>
                                    </div>
                                    <div class="py-6 pl-2 text-gray-700">
                                        <p>Hi John!</p>
                                        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                        <p class="mt-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <p class="mt-4">Sed ut perspiciatis unde omnis iste natus error sit:</p>
                                        <ul class="ml-12 list-disc">
                                            <li>voluptatem accusantium</li>
                                            <li>doloremque laudantium</li>
                                            <li>totam rem aperiam</li>
                                            <li>eaque ipsa quae ab illo inventore veritatis</li>
                                            <li>quasi architecto</li>
                                        </ul>
                                        <p class="mt-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.</p>
                                        <p class="mt-4">Regards,</p>
                                        <p>Betty Garmon</p>
                                    </div>
                                    <div class="border-t-2 flex space-x-4 py-4">
                                        <div class="w-70 flex items-center py-2.5 px-2 border-2 border-gray-300 rounded-lg hover:bg-gray-200">
                                            <div class="flex items-center">
                                                <div class="w-10 flex items-center justify-center">
                                                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 121.83"><defs></defs><path class="cls-1" d="M102.42,37H81.92a8.52,8.52,0,0,1-8.85-8.7V7.53H21a.58.58,0,0,0-.41.18.45.45,0,0,0-.18.42V113.71a.7.7,0,0,0,.18.41.51.51,0,0,0,.41.18h80.84c.18,0,.17-.09.26-.18s.34-.28.34-.41V37Zm7.47,79.08a5.77,5.77,0,0,1-5.76,5.76H18.66a5.77,5.77,0,0,1-5.76-5.76V5.76a5.7,5.7,0,0,1,1.69-4.07A5.77,5.77,0,0,1,18.66,0H76.9a4.22,4.22,0,0,1,2.46.82l29.75,30.12a2.57,2.57,0,0,1,.78,2.6v82.53ZM80,27.69,79.57,9.63,100.66,31l-18.14-.81A2.4,2.4,0,0,1,80,27.69Z"></path><path class="cls-2" d="M6.71,46.28H116.17A6.73,6.73,0,0,1,122.88,53v45.1a6.73,6.73,0,0,1-6.71,6.71H6.71A6.73,6.73,0,0,1,0,98.09V53a6.73,6.73,0,0,1,6.71-6.71Z"></path><path class="cls-3" d="M16.33,59.78h16.2c3.53,0,6.17.83,7.94,2.51s2.63,4.08,2.63,7.18a9.71,9.71,0,0,1-2.88,7.47c-1.91,1.8-4.84,2.69-8.77,2.69H26.1V91.3H16.33V59.78ZM26.1,73.25h2.4a6.22,6.22,0,0,0,4-1,3.17,3.17,0,0,0,1.14-2.51,3.51,3.51,0,0,0-1-2.52c-.66-.69-1.91-1-3.75-1H26.1v7ZM48.3,59.78H62.78a17.47,17.47,0,0,1,6.92,1.16,11.23,11.23,0,0,1,4.35,3.33,13.66,13.66,0,0,1,2.49,5,23.36,23.36,0,0,1,.78,6.11,21.16,21.16,0,0,1-1.15,7.84A13,13,0,0,1,73,87.93a10.38,10.38,0,0,1-4.39,2.51,22.39,22.39,0,0,1-5.81.86H48.3V59.78ZM58,66.91V84.13h2.4a10.16,10.16,0,0,0,4.36-.68,4.65,4.65,0,0,0,2-2.36,14.84,14.84,0,0,0,.73-5.48q0-5-1.63-6.85c-1.09-1.23-2.91-1.85-5.44-1.85Zm24.43-7.13h24.09v6.78H92.24v5.5h12.24v6.39H92.24V91.3H82.46V59.78Z"></path></svg>
                                                </div>
                                                <div class="w-48 ml-2 flex flex-col">
                                                    <a href="#" class="text-sm text-gray-700 font-bold truncate">Terms and Conditions.pdf</a>
                                                    <span class="text-gray-500 text-xs">1.5 MB</span>
                                                </div>
                                            </div>
                                            <button class="w-6 flex items-center justify-center" title="Download">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-500 hover:text-gray-600 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="w-70 flex items-center py-2.5 px-2 border-2 border-gray-300 rounded-lg hover:bg-gray-200">
                                            <div class="flex items-center">
                                                <div class="w-10 flex items-center justify-center">
                                                </div>
                                                <div class="w-48 ml-2 flex flex-col">
                                                    <a href="#" class="text-sm text-gray-700 font-bold truncate">Contract Proposal.docx</a>
                                                    <span class="text-gray-500 text-xs">3.1 MB</span>
                                                </div>
                                            </div>
                                            <button class="w-6 flex items-center justify-center" title="Download">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-500 hover:text-gray-600 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="mt-8 flex items-center space-x-4">
                                        <button class="w-32 flex items-center justify-center space-x-2 py-1.5 text-gray-600 border border-gray-400 rounded-lg hover:bg-gray-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span>Reply</span>
                                        </button>
                                        <button class="w-32 flex items-center justify-center space-x-2 py-1.5 text-gray-600 border border-gray-400 rounded-lg hover:bg-gray-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                            </svg>
                                            <span>Forward</span>    
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
    </div>
  )
}

export default Inbox
