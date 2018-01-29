import { NgModule } from "@angular/core";
import { StarComponent } from "./star.component";
import { ConvertToSpacesPipe } from "./convert-to-spaces.pipe";


@NgModule({
    declarations: [
      StarComponent, ConvertToSpacesPipe
    ],
    exports:[ StarComponent, ConvertToSpacesPipe ],
    imports: [],
    providers: [  ],
    //bootstrap: []
  })
  export class MySharedModule { }