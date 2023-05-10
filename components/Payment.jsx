import React from 'react'

const Payment = () => {
  return (
    <div>
       


    <div>
    <div class="min-h-screen flex justify-center items-center bg-blue-500">
    <div class=" card rounded-lg h-auto w-3/4 bg-white">
        <div class="flex h-full w-full ">
            
            <div class="left_side truncate relative rounded-l-lg h-auto w-full truncate"> 
               
                <div class="h-48 w-72 opacity-70 rounded-lg  bg-blue-300 absolute top-28 left-8 ">
                    <div class="p-2 mt-3 text-black font-semibold">
                        <p >Card Number</p>
                        <p class="border-b-2 text-white shown_number">0000 0000 0000 0000</p>
                    </div>
                    <div class="flex gap-3 mt-3">
                        <div class="p-2 mt-2 text-black font-semibold">
                            <p >Expiry Date</p>
                            <p class="border-b-2 text-white shown_expiry">mm/yyyy</p>
                        </div>
                        <div class="p-2 mt-2 text-black font-semibold">
                            <p >CVV</p>
                            <p class="border-b-2 text-white shown_cvv">000</p>
                        </div>
                    </div>
                </div>
            </div>
                 
            
            <div class="p-3 right_side truncate h-auto w-full bg-gray-300 rounded-r-lg">
                <p class="mt-3 text-xl font-semibold">Payment Details</p>
                <div class="mt-5 relative"> <input class="input_number h-12 w-full border border-white transition-all rounded-lg px-2 outline-none focus:border-blue-900" type="text" placeholder="0000 0000 0000 0000" data-slots="0" data-accept="\d" size="19" onkeyup="Number(this.value)"/> <label class="text-xs absolute -top-4 left-0">Card Number</label> </div>
                <div class="mt-7 w-full flex gap-3">
                    <div class=" relative w-full"> 
                    <input class="input_expiry h-12 w-full border border-white transition-all rounded-lg px-2 outline-none focus:border-blue-900" placeholder="mm/yyyy" data-slots="my" type="text" onkeyup="Expiry(this.value)"/> <label class="text-xs absolute -top-4 left-0" >Expiry Date</label> </div>
                    <div class=" relative w-full"> 
                        <input class="input_cvv h-12 w-full border border-white transition-all rounded-lg px-2 outline-none focus:border-blue-900" type="text"  placeholder="000" data-slots="0" data-accept="\d" size="3"  onkeyup="Cvv(this.value)"/> <label class="text-xs absolute -top-4 left-0">CVV</label> </div>
                </div>
                <div class="mt-7 relative"> <input class="h-12 w-full border border-white transition-all rounded-lg px-2 outline-none focus:border-blue-900" type="text"/> <label class="text-xs absolute -top-4 left-0" onkeyup="Name(this.value)">Name on Card</label> </div>
                <p class="mt-4">Amount due : <a class="font-semibold" href="#"><i class="fa fa-rupee"></i> 12,500.00</a></p>
                <div class="mb-5"> <button class="pay_now mt-4 outline-none rounded-lg text-white h-12 w-full bg-green-500 text-sm cursor-pointer transition-all hover:bg-green-800"><i class="fa fa-lock mr-1 "></i>Pay Now</button> </div>
            </div>
        </div>
    </div> 
</div>
    </div>
    </div>
  )
}

export default Payment
