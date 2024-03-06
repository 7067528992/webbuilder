import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
// header start here 

export default function Header(){
    return (
        <>
        <div className="header">
            < input type="search" placeholder="search"/>
          <span className="anchor-tag">
            <a href="#">categories</a>
            <a href="#">website builder</a>
            <a href="#">Today deal</a>
          </span>
       </div>

{/* here is the container which contain all main body  */}
<div className="container">

    {/* navbar one which below header  */}
       <div className="navbar-1">
       <h2>Best website builder in the US</h2>
        <hr />
        {/* navbar 2  */}
       <div className="navbar-2">
        <span style={{textAlign:"center"}}><CheckCircleOutlineIcon/>Last updated-February 22,2020</span>
       <span>Advertising disclosure</span> 
       <span >Top relevent < KeyboardArrowDownRoundedIcon/></span>    
       </div>
       </div>
       < hr />
       {/* navbar -3 */}
       <div  className="navbar-3">
        <span><a href="#">Tools</a></span>
        <span><a href="#">AWS builder</a></span>
        <span><a href="#">Start build</a></span>
        <span><a href="#">Build supplies</a></span>
        <span><a href="#">Tooling</a></span>
        <span><a href="#">BlueHosting</a></span>
       </div>


       {/* navbar-4 which contain all links to home and many more  */}
       <div className="navbar-4">
       <span >
        <a href="#">Home</a>
       <NavigateNextIcon fontSize='15px'/>
       </span>
       <span>
        <a href="#">Hosting for all</a>
        <NavigateNextIcon fontSize='15px'/>
       </span>
       <span>
        <a href="#">Hosting</a>
        <NavigateNextIcon fontSize='15px'/>
       </span>
       <span>
        <a href="#">Hosting 6</a>
        <NavigateNextIcon fontSize='15px'/>
       </span>
       <span>
        <a href="#">Hosting 5</a>
        <NavigateNextIcon fontSize='15px'/>
       </span>
       </div>
         {/* here is the main content which is the middle part of the page  */}
       <div className="main">
            <div className="imgage">
                <h2 id='heading'>1</h2>

                <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jd5lN84cl8O~LXXMpoOBFN1Ihsi7r8n1AQf5aMS~VBnObDIoKGYZp9J087BkkmQ1~oXFFo43s11V5VCq16X54YgwYOL3KNG1gxIKQqammYppA5~lfBk9x2OBTi23d1N71ledT2WZZNtYcVo9L6dK7RcNbvzF8xP54B7Pwz5kI~FhfXNa5MA8sXsZPofP~Xa78bz3IaefjAm9JqtItq2TKGkfS2v4o12I84X1yxNkPdVZduaU66sV2qRl8yMqEVAmgXRWUpG4r3F6TjlqYhtvZbLDRU-oyhDudtAxJM4Oq2aanq8BVyGgsSABp-xsn97ry7ObEXu9Tl516aeVV-1SeQ__" alt="image.png" />
            </div>

            <div className="paragraph">
            <p><b>Lorem ipsum dolor sit amet</b>: consectetur adipisicing elit. Quas officiis vero blanditiis sit qui omnis eveniet, dolore nulla sint nisi?</p>

            <h3>Main highlights</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dicta ex facilis odio similique ipsa architecto nam aliquid. Reiciendis facere doloribus, obcaecati in ea quasi libero ullam nesciunt alias quo.</p>
            <span className='span'><a href="#">Show more <ArrowDropDownIcon/></a></span>
            </div>
            <div className="rating">
               <div className="rate">
                    <h2>9.8</h2>
                    <p>Exceptional</p>
                    <img src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-five-star-rating-icon-png-image_4974126.png" alt="star-rating" />

               </div>
               <Button variant="contained" size="medium">
          View
        </Button>
            </div>
        </div>
       <div className="main">
            <div className="imgage">
                <h2 id='heading'>2</h2>
                <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jd5lN84cl8O~LXXMpoOBFN1Ihsi7r8n1AQf5aMS~VBnObDIoKGYZp9J087BkkmQ1~oXFFo43s11V5VCq16X54YgwYOL3KNG1gxIKQqammYppA5~lfBk9x2OBTi23d1N71ledT2WZZNtYcVo9L6dK7RcNbvzF8xP54B7Pwz5kI~FhfXNa5MA8sXsZPofP~Xa78bz3IaefjAm9JqtItq2TKGkfS2v4o12I84X1yxNkPdVZduaU66sV2qRl8yMqEVAmgXRWUpG4r3F6TjlqYhtvZbLDRU-oyhDudtAxJM4Oq2aanq8BVyGgsSABp-xsn97ry7ObEXu9Tl516aeVV-1SeQ__" alt="image.png" />
            </div>

            <div className="paragraph">
            <p><b>Lorem ipsum dolor sit amet</b>: consectetur adipisicing elit. Quas officiis vero blanditiis sit qui omnis eveniet, dolore nulla sint nisi?</p>

            <h3>Main highlights</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dicta ex facilis odio similique ipsa architecto nam aliquid. Reiciendis facere doloribus, obcaecati in ea quasi libero ullam nesciunt alias quo.</p>
            <span className='span' ><a href="#">Show more < ArrowDropDownIcon/></a></span>
            </div>
            <div className="rating">
               <div className="rate">
                    <h2>9.8</h2>
                    <p>Exceptional</p>
                    <img src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-five-star-rating-icon-png-image_4974126.png" alt="star-rating" />

               </div>
               <Button variant="contained" size="medium">
          View
        </Button>
            </div>
        </div>
       <div className="main">
            <div className="imgage">
                <h2 id='heading'>3</h2>
                <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jd5lN84cl8O~LXXMpoOBFN1Ihsi7r8n1AQf5aMS~VBnObDIoKGYZp9J087BkkmQ1~oXFFo43s11V5VCq16X54YgwYOL3KNG1gxIKQqammYppA5~lfBk9x2OBTi23d1N71ledT2WZZNtYcVo9L6dK7RcNbvzF8xP54B7Pwz5kI~FhfXNa5MA8sXsZPofP~Xa78bz3IaefjAm9JqtItq2TKGkfS2v4o12I84X1yxNkPdVZduaU66sV2qRl8yMqEVAmgXRWUpG4r3F6TjlqYhtvZbLDRU-oyhDudtAxJM4Oq2aanq8BVyGgsSABp-xsn97ry7ObEXu9Tl516aeVV-1SeQ__" alt="image.png" />
            </div>

            <div className="paragraph">
            <p><b>Lorem ipsum dolor sit amet</b>: consectetur adipisicing elit. Quas officiis vero blanditiis sit qui omnis eveniet, dolore nulla sint nisi?</p>

            <h3>Main highlights</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dicta ex facilis odio similique ipsa architecto nam aliquid. Reiciendis facere doloribus, obcaecati in ea quasi libero ullam nesciunt alias quo.</p>
            <span className='span'><a href="#">Show more <ArrowDropDownIcon/></a></span>
            </div>
            <div className="rating">
               <div className="rate">
                    <h2>9.8</h2>
                    <p>Exceptional</p>
                    <img src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-five-star-rating-icon-png-image_4974126.png" alt="star-rating" />

               </div>
               <Button variant="contained" size="medium">
          View
        </Button>
            </div>
        </div>
       <div className="main">
            <div className="imgage">
                <h2 id='heading'>4</h2>
                <img src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jd5lN84cl8O~LXXMpoOBFN1Ihsi7r8n1AQf5aMS~VBnObDIoKGYZp9J087BkkmQ1~oXFFo43s11V5VCq16X54YgwYOL3KNG1gxIKQqammYppA5~lfBk9x2OBTi23d1N71ledT2WZZNtYcVo9L6dK7RcNbvzF8xP54B7Pwz5kI~FhfXNa5MA8sXsZPofP~Xa78bz3IaefjAm9JqtItq2TKGkfS2v4o12I84X1yxNkPdVZduaU66sV2qRl8yMqEVAmgXRWUpG4r3F6TjlqYhtvZbLDRU-oyhDudtAxJM4Oq2aanq8BVyGgsSABp-xsn97ry7ObEXu9Tl516aeVV-1SeQ__" alt="image.png" />
            </div>

            <div className="paragraph">
            <p><b>Lorem ipsum dolor sit amet</b>: consectetur adipisicing elit. Quas officiis vero blanditii</p>

            <h3>Main highlights</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum dicta ex facilis odio similique ipsa architecto nam aliquid. Reiciendis facere doloribus, obcaecati in</p>
            <span className='span'><a href="#">Show more <ArrowDropDownIcon/></a></span>
            </div>
            <div className="rating">
               <div className="rate">
                    <h2>9.8</h2>
                    <p>Exceptional</p>
                    <img src="https://png.pngtree.com/png-vector/20220610/ourmid/pngtree-five-star-rating-icon-png-image_4974126.png" alt="star-rating" />

               </div>
               <Button variant="contained" size="medium">
          View
        </Button>
            </div>
        </div>
    <h2>Related deals you might like for</h2>
    </div>
        </>
    )
    }
