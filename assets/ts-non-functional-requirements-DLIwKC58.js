import{k as s,j as e}from"./entry.client-E7ETWePr.js";const l="This section describes the quality attributes of the Web Application Postprocessor, specifying criteria that can be used to judge its operation and user experience.",o=[{depth:1,value:"4. Non-Functional Requirements",id:"4-non-functional-requirements",children:[{depth:2,value:"4.1. Performance",id:"41-performance",children:[{depth:3,value:"4.1.1. Page Load Time",id:"411-page-load-time"},{depth:3,value:"4.1.2. UI Responsiveness",id:"412-ui-responsiveness"},{depth:3,value:"4.1.3. Resource Usage",id:"413-resource-usage"}]},{depth:2,value:"4.2. Usability",id:"42-usability",children:[{depth:3,value:"4.2.1. Ease of Learning",id:"421-ease-of-learning"},{depth:3,value:"4.2.2. User Interface Consistency",id:"422-user-interface-consistency"},{depth:3,value:"4.2.3. Accessibility (Optional, but good to include if relevant)",id:"423-accessibility-optional-but-good-to-include-if-relevant"}]},{depth:2,value:"4.3. Compatibility",id:"43-compatibility",children:[{depth:3,value:"4.3.1. Browser Compatibility",id:"431-browser-compatibility"},{depth:3,value:"4.3.2. Responsive Design",id:"432-responsive-design"}]},{depth:2,value:"4.4. Security",id:"44-security",children:[{depth:3,value:"4.4.1. Client-Side Data Protection",id:"441-client-side-data-protection"},{depth:3,value:"4.4.2. Error Handling",id:"442-error-handling"}]},{depth:2,value:"4.5. Maintainability",id:"45-maintainability",children:[{depth:3,value:"4.5.1. Code Structure",id:"451-code-structure"},{depth:3,value:"4.5.2. Testability",id:"452-testability"}]}]}],a=void 0;function t(n){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h1,{id:"4-non-functional-requirements",children:"4. Non-Functional Requirements"}),`
`,e.jsxs(i.p,{children:["This section describes the quality attributes of the ",e.jsx(i.strong,{children:"Web Application Postprocessor"}),", specifying criteria that can be used to judge its operation and user experience."]}),`
`,e.jsx(i.h2,{id:"41-performance",children:"4.1. Performance"}),`
`,e.jsx(i.h3,{id:"411-page-load-time",children:"4.1.1. Page Load Time"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," The initial application load (time to interactive) shall not exceed ",e.jsx(i.strong,{children:"3 seconds"})," on a standard broadband connection (e.g., 50 Mbps)."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," Subsequent page transitions (within the SPA) shall complete within ",e.jsx(i.strong,{children:"1 second"}),"."]}),`
`]}),`
`,e.jsx(i.h3,{id:"412-ui-responsiveness",children:"4.1.2. UI Responsiveness"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," User interface elements (buttons, forms) shall respond to user input within ",e.jsx(i.strong,{children:"100 milliseconds"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," Data rendering (e.g., updating charts, sorting tables) for datasets up to 1000 records shall complete within ",e.jsx(i.strong,{children:"500 milliseconds"}),"."]}),`
`]}),`
`,e.jsx(i.h3,{id:"413-resource-usage",children:"4.1.3. Resource Usage"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," The application shall consume no more than ",e.jsx(i.strong,{children:"200 MB of RAM"})," in a modern browser during typical usage (e.g., viewing patient data, performing a single post-processing operation)."]}),`
`]}),`
`,e.jsx(i.h2,{id:"42-usability",children:"4.2. Usability"}),`
`,e.jsx(i.h3,{id:"421-ease-of-learning",children:"4.2.1. Ease of Learning"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," A new user, familiar with basic web applications, shall be able to perform primary tasks (e.g., log in, view patient list) with minimal instruction within ",e.jsx(i.strong,{children:"15 minutes"}),"."]}),`
`]}),`
`,e.jsx(i.h3,{id:"422-user-interface-consistency",children:"4.2.2. User Interface Consistency"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," All UI elements (buttons, input fields, navigation) shall adhere to a consistent design system throughout the application."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," Error messages shall be clear, concise, and provide actionable feedback to the user."]}),`
`]}),`
`,e.jsx(i.h3,{id:"423-accessibility-optional-but-good-to-include-if-relevant",children:"4.2.3. Accessibility (Optional, but good to include if relevant)"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," The application shall strive to meet WCAG 2.1 AA guidelines for accessibility (e.g., keyboard navigation, screen reader compatibility)."]}),`
`]}),`
`,e.jsx(i.h2,{id:"43-compatibility",children:"4.3. Compatibility"}),`
`,e.jsx(i.h3,{id:"431-browser-compatibility",children:"4.3.1. Browser Compatibility"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," The application shall fully function and display correctly on the latest stable versions of Google Chrome, Mozilla Firefox, Microsoft Edge, and Apple Safari."]}),`
`]}),`
`,e.jsx(i.h3,{id:"432-responsive-design",children:"4.3.2. Responsive Design"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," The application's layout shall adapt correctly and maintain usability across common screen sizes, from desktop monitors (1920x1080) down to tablet devices (768px width) and mobile phones (375px width)."]}),`
`]}),`
`,e.jsx(i.h2,{id:"44-security",children:"4.4. Security"}),`
`,e.jsx(i.h3,{id:"441-client-side-data-protection",children:"4.4.1. Client-Side Data Protection"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," Authentication tokens (JWTs) shall be stored securely (e.g., in ",e.jsx(i.code,{inline:"true",children:"HttpOnly"})," cookies if backend-managed, or securely in ",e.jsx(i.code,{inline:"true",children:"localStorage"})," with appropriate precautions) and transmitted only over HTTPS."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," All user inputs shall be properly validated and sanitized on the client-side (and re-validated on the server-side by the API) to prevent common vulnerabilities like Cross-Site Scripting (XSS)."]}),`
`]}),`
`,e.jsx(i.h3,{id:"442-error-handling",children:"4.4.2. Error Handling"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," The application shall gracefully handle API errors (e.g., network issues, API downtimes, authentication failures) and provide informative messages to the user without crashing."]}),`
`]}),`
`,e.jsx(i.h2,{id:"45-maintainability",children:"4.5. Maintainability"}),`
`,e.jsx(i.h3,{id:"451-code-structure",children:"4.5.1. Code Structure"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," The React codebase shall follow a modular component-based architecture, making it easy to understand, test, and extend."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," Adherence to agreed-upon coding standards (e.g., ESLint rules, Prettier formatting) is mandatory."]}),`
`]}),`
`,e.jsx(i.h3,{id:"452-testability",children:"4.5.2. Testability"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.strong,{children:"Requirement:"})," Key components and critical functionalities shall have unit tests and integration tests with sufficient coverage (e.g., 70% code coverage)."]}),`
`]})]})}function d(n={}){const{wrapper:i}={...s(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{d as default,l as excerpt,a as frontmatter,o as tableOfContents};
//# sourceMappingURL=ts-non-functional-requirements-DLIwKC58.js.map
