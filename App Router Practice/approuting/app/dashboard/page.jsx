// 'use client';

const dashboardpage = () => {

    async function sayHello(params){
        "use server";
        console.log("hello from DB");
        console.log(params);
    }

    console.log('hey there');
    return(
        <h1>
          <form action={sayHello}>
            <input type="email" name="email" />
           <button>
            Submit
           </button>
          </form>
        </h1>
    )
};

export default dashboardpage;