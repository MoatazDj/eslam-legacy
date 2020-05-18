import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  amount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  proceedPayment(){
    let amount = {amount : this.amount};
    fetch('http://localhost:8200/paypal/donate', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(amount)
    })
    .then(res =>{
      console.log('res',res)
      return res.json()
    })
    .then(link =>{
      console.log(link)
      window.location.href = link.link;
    })
    .catch(err =>{
      throw err;
    })
  }
}
