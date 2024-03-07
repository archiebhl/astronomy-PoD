import React from 'react';
import './TitleSection.css'; 

const TITLE = String.raw`
 ______     ______     ______   ______     ______     __   __     ______     __    __     __  __        ______   __  __     ______     ______   ______    
/\  __ \   /\  ___\   /\__  _\ /\  == \   /\  __ \   /\ "-.\ \   /\  __ \   /\ "-./  \   /\ \_\ \      /\  == \ /\ \_\ \   /\  __ \   /\__  _\ /\  __ \   
\ \  __ \  \ \___  \  \/_/\ \/ \ \  __<   \ \ \/\ \  \ \ \-.  \  \ \ \/\ \  \ \ \-./\ \  \ \____ \     \ \  _-/ \ \  __ \  \ \ \/\ \  \/_/\ \/ \ \ \/\ \  
 \ \_\ \_\  \/\_____\    \ \_\  \ \_\ \_\  \ \_____\  \ \_\\"\_\  \ \_____\  \ \_\ \ \_\  \/\_____\     \ \_\    \ \_\ \_\  \ \_____\    \ \_\  \ \_____\ 
  \/_/\/_/   \/_____/     \/_/   \/_/ /_/   \/_____/   \/_/ \/_/   \/_____/   \/_/  \/_/   \/_____/      \/_/     \/_/\/_/   \/_____/     \/_/   \/_____/ 
                                                                                                                                                          
 ______     ______      ______   __  __     ______        _____     ______     __  __                                                                     
/\  __ \   /\  ___\    /\__  _\ /\ \_\ \   /\  ___\      /\  __-.  /\  __ \   /\ \_\ \                                                                    
\ \ \/\ \  \ \  __\    \/_/\ \/ \ \  __ \  \ \  __\      \ \ \/\ \ \ \  __ \  \ \____ \                                                                   
 \ \_____\  \ \_\         \ \_\  \ \_\ \_\  \ \_____\     \ \____-  \ \_\ \_\  \/\_____\                                                                  
  \/_____/   \/_/          \/_/   \/_/\/_/   \/_____/      \/____/   \/_/\/_/   \/_____/                                                                  
                                                                                                                                                                                                                                                                                                                                          
`;

function TitleSection() {
  return (
    <div className="full-screen-title">
      <pre>{TITLE}</pre>
    </div>
  );
};

export default TitleSection;

/*
-> Conversion to FigLet font by MEPH. (Part of ASCII Editor Service Pack I)
   (http://studenten.freepage.de/meph/ascii/ascii/editor/_index.htm)
-> Defined: ASCII code alphabet
-> Uppercase characters only.

ScarecrowsASCIIArtArchive1.0.txt
From: "Sub-Zero" <bodom@papaya.ucs.indiana.edu>
"Here's a font I've been working on lately.  Can someone make the V, Q, and X
look better?  Also, the B, P, and R could use an improvement too.
Oh, here it is."
*/
