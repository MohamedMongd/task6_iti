import Link1 from "../component/proskills"
export default function skills(){
    return<>
    <div className="skills_main">
        <div>
            <h1> Skills</h1>
            <h4>1. c++ ,or oop <span>Object-Oriented Programming </span>
            2. MySQL SQL database engine software
            3. pyhton
            4. Front-end Web Programming Languages as html, or java scribt or css .
            5. Problem Solving</h4>
        </div>
        <div className="mainfocus">
        <div className="focus">
            <h4> My Foucus</h4>
            <h4>----------------</h4>
            <h4>UI/UX Design</h4>
            <h4> Web Design</h4>
            <h4> Mobile App Design</h4>
        </div>
        <div className="inputHoppy" >
            <Link1 name="Html" />
            <Link1 name="Css" />
            <Link1 name="Java scribt" />
            <Link1 name="Physon" />
            <Link1 name="C++" />
            <Link1 name="React" />
            
           
           
        </div>
        
     
     </div>

    </div>
    </>
}