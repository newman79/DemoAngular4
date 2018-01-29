import { Component, Input, Output, EventEmitter } from "@angular/core";
import { OnChanges } from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges  {
    starWidth:number = 0;
    @Input() rating:number = 4;

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(elem): void {
        this.rating --; 
        this.starWidth = this.rating * 86/5;
        console.log('StarComponent following field has been updated ',elem);
    }
    
    onClick() {
        this.notify.emit('clicked');
    }
}