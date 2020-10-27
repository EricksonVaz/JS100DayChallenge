(function(){
    const form = document.querySelector('form');
    const listCourse = document.querySelector('main');

    form.addEventListener('click',function(e){
        e.preventDefault();

        var returnCheck = checkInput();

        if(returnCheck.length>=3){
            let course = new Courses(returnCheck);
            
            if(listCourse.innerText==='No Course Registered ...'){
                listCourse.innerHTML = '';
            }
            course.loadCourse();
        }
    });

    function checkInput(){
        let values = [];
        let inputs = form.querySelectorAll('input');

        inputs.forEach((input)=>{
            input.parentElement.nextElementSibling.classList.remove('show');
            if(input.value===''){
                input.parentElement.nextElementSibling.classList.add('show');
            }else{
                values.push(input.value);
            }
        });

        return values;
    }

    function Courses(values){
        this.custumer = values[0];
        this.course = values[1];
        this.author = values[2];

        this.loadCourse = function (){
            listCourse.innerHTML +=`
                <div class="card">
                    <img src="img/c1.png">
                    <div class="info">
                        <small class="custumer">Custumer</small><small>${this.custumer}</small>
                    </div>
                    <div class="info">
                        <small class="course">Course</small><small>${this.course}</small>
                    </div>
                    <div class="info">
                        <small class="author">Author</small><small>${this.author}</small>
                    </div>
                </div>
            `;
        }
    }
})();