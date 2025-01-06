<script>
        const heading = React.createElement("h2", {}, "Hello World 💪 from react");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
        const sachin = React.createElement("h3", {}, "Hello , 🙏 sachin this side");
        const sachinRoot = ReactDOM.createRoot(document.getElementById("sachin"));
        sachinRoot.render(sachin);
     </script>