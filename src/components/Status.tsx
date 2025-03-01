import { useLanyardWS } from "use-lanyard";
import React from "react";

// const Status: React.FC = () => {
//     const data = useLanyardWS("");
//
//     const listening = data?.spotify || null;
//     const coding = data?.activities?.find((a: { name: string }) => a.name === "Visual Studio Code") || null;
//
//     const codeImage = coding?.assets?.large_image
//         ? `https://cdn.discordapp.com/app-assets/${coding.application_id}/${coding.assets.large_image}.png`
//         : "/assets/vscode.webp";
//
//     const renderCodingContent = () => {
//         return (
//             <div className="relative flex items-center space-x-3 rounded-lg bg-white dark:bg-black/10 px-6 py-5 transition ease-in-out duration-150">
//                 <div className="flex-shrink-0">
//                     <img className="h-10 w-10 rounded-lg" src={codeImage} alt="Code" />
//                 </div>
//                 <div className="min-w-0 flex-1">
//                     <div className="focus:outline-none">
//                         <span className="absolute inset-0" aria-hidden="true" />
//                         {renderCodingStatusText()}
//                         {coding && renderCodingDetails()}
//                     </div>
//                 </div>
//             </div>
//         );
//     };
//
//     const renderListeningContent = () => {
//         const trackLink = listening ? `https://open.spotify.com/track/${listening.track_id}` : null;
//         const artLink = listening?.album_art_url || "/assets/spotify.webp";
//
//         return (
//             <div className="relative flex items-center space-x-0 rounded-lg bg-white dark:bg-black/10 px-6 py-5 transition ease-in-out duration-150">
//                 <div className="flex-shrink-0">
//                     <img className="h-10 w-10 rounded-lg" src={artLink} alt="Spotify" />
//                 </div>
//                 <div className="min-w-0 flex-1">
//                     {trackLink ? (
//                         <a href={trackLink} className="focus:outline-none">
//                             <span className="absolute inset-0" aria-hidden="true" />
//                             {renderListeningStatusText()}
//                             {renderListeningDetails()}
//                         </a>
//                     ) : (
//                         <div>
//                             <span className="absolute inset-0" aria-hidden="true" />
//                             {renderListeningStatusText()}
//                             {renderListeningDetails()}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         );
//     };
//
//     const renderCodingStatusText = () => {
//         return coding ? (
//             <>
//                 <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{coding.details}</p>
//                 <p className="text-sm font-medium dark:font-semibold text-zinc-500 dark:text-zinc-200">
//                     {coding.state}
//                 </p>
//             </>
//         ) : (
//             <>
//                 <p className="text-sm text-center font-medium text-zinc-600 dark:text-zinc-400">Not Coding in</p>
//                 <p className="text-sm text-center font-medium text-zinc-600 dark:text-zinc-400">Visual Studio Code</p>
//             </>
//         );
//     };
//
//     const renderListeningStatusText = () => {
//         return listening ? (
//             <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
//                 Listening to{" "}
//                 <span className="text-sm font-medium dark:font-semibold text-zinc-500 dark:text-zinc-200">
//                     {listening.song}
//                 </span>
//             </p>
//         ) : (
//             <p className="text-sm text-center font-medium text-zinc-600 dark:text-zinc-400">Not Listening to</p>
//         );
//     };
//
//     const renderCodingDetails = () => {
//         return (
//             <p className="truncate text-sm text-zinc-500 dark:text-zinc-200 text-center">
//                 in{" "}
//                 <span className="text-sm font-medium dark:font-semibold text-zinc-500 dark:text-zinc-200">
//                     Visual Studio Code
//                 </span>
//             </p>
//         );
//     };
//
//     const renderListeningDetails = () => {
//         return listening ? (
//             <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 overflow-wrap break-word">
//                 by{" "}
//                 <span className="font-medium dark:font-semibold text-zinc-500 dark:text-zinc-200">
//                     {listening.artist}
//                 </span>
//             </p>
//         ) : (
//             <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 text-center">Spotify</p>
//         );
//     };
//
//     return (
//         <div className="grid rounded-md grid-cols-1 gap-4 mt-8 mb-10 sm:mb-0 sm:grid sm:grid-cols-2 sm:gap-4">
//             {renderCodingContent()}
//             {renderListeningContent()}
//         </div>
//     );
// };
//
// export default Status;
