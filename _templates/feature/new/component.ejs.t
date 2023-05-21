---
to: src/features/<%=name%>/components/<%= Name + 'Card' %>.js
unless_exists: true
---

<% ComponentName = `${Name}Card` %>
// 1. Imports - Prefer destructuring imports to minimize writen code
import React, { useState, useEffect } from "react";


// 2. Types
type ComponentProps = {
  someProperty: string;
}

// 3. Additional variables
const SOME_CONSTANT = "something";

// 4. Component
function <%=ComponentName%>({...props}){

  // 4.1 Definitions
  const [state, setState] = useState(true);


  // 4.2 Props destructures
  const { property } = props;
  

  // 4.3 Functions
  function handleToggleState() {
    setState(!state);
  }


  // 4.4 Effects
  useEffect(() => {
    // ...
  }, []);

  
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Pellentesque arcu. Et harum quidem rerum facilis est et expedita
        distinctio.
      </p>
    </>
  )  
}


// 5 Export
export { <%=ComponentName%> };