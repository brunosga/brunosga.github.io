const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <span>
    <HeaderContent />
    <MainContent />
    </span>
)

function HeaderContent () {
    return (
        <header><h1>Corporate strategy</h1></header>
    )
 }

 function MainContent () {
    return (
        <div>
        <ImgContent />
        <main><section><p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p></section></main>
        </div>
    )
 }

 function ImgContent () {
    return (
       <figure><img src="https://lunevedy.netlify.app/ui/assets/img/1024x618-cafe.jpg" alt="sample image"/></figure>
    )
 }