import { Component, OnInit } from '@angular/core';
import { PeService } from '../pe.service';


@Component({
  selector: 'app-propose',
  templateUrl: './propose.component.html',
  styleUrls: ['./propose.component.css']
})
export class ProposeComponent implements OnInit {
  private schema;

  constructor(
    private pe: PeService
  ) { }

  ngOnInit() {
    this.loadSchema();
  }

  loadSchema() {
      this.pe.getSchema().subscribe(
        x => this.schema = x
      );
  }

  getJSON() {
    //return   {...this.schema, version:1}
    return this.schema?this.jsonToMap(this.schema.ProductSchema.BasicParticular.SupportSmokingStatus.SmokingStatus):'';
    //return this.schema?this.jsonToMap(this.schema.ProductSchema.BasicParticular.PremiumRangeInformation.PremiumRange[0].BillingMode):'';
    //return this.schema?this.jsonToMap(this.schema.ProductSchema.BasicParticular.PremiumPaidPeriod):'';
    //return this.schema?this.jsonToMap(this.schema.ProductSchema.BasicParticular.IssueAge):'';
  }

  mapToJson(map) {
      return JSON.stringify([...map]);
  }

  jsonToMap(obj) {
    console.log(obj)
      if(Object.keys(obj).length==1) {
        return {'values' : [obj.text]};
      }
      else {
        return {'values' : Object.keys(obj).map(function(k) { return obj[k].text })};
      }
  }

}
