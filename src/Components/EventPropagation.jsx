const EventPropagation = () => {
return (
<section className="main-div">
    <div className="g-div" onClick={handleGrandParent}>
<div className="p-div" onClick={handleParentClick}>
<button className="c-div" onClick={handleChildClick}>Child Div</button>
</div>
    </div>

</section>


)
}