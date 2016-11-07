import{Component}from"@angular/core";

@Component({
    selector: 'hello-world',
    template: `<div>
                <ul>
<li *ngFor="let name of names">Hello {{name}}</li>
                </ul>
                </div>
            `
})
export class HelloWorld
{
names: string[];

constructor(){
this.names = ['Luca','Ciccione','Puzzone'];
}
}