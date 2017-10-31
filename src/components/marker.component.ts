import {
  Directive,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core'

import { nullCheck } from '../helpers/validate'
import { MapService } from '../providers/mapService'
import { BMap } from '../types/BMap'
import { Map } from '../types/Map'
import { Marker, MarkerOptions } from '../types/Marker'
import { Point } from '../types/Point'

@Directive({
  selector: 'marker'
})
export class MarkerComponent implements OnInit, OnDestroy {
  @Input() private point: Point
  @Input() private options: MarkerOptions

  @Output() private clicked = new EventEmitter()

  private marker: Marker

  constructor(private _service: MapService) {}

  public ngOnInit() {
    nullCheck(this.point, 'point is required for <marker>')

    this._service
      .addOverlay((map: Map) => {
        return (this.marker = new (window.BMap as BMap).Marker(
          this.point,
          this.options
        ))
      })
      .then(({ map }) => {
        this.addListener(this.marker, map)
      })
      .then(() => {
        // workaround: it's weird that postion is set while constructing phase will make click event not working
        this.marker.setPosition(
          new (window.BMap as BMap).Point(this.point.lng, this.point.lat)
        )
      })
  }

  public ngOnDestroy() {
    this._service.removeOverlay(this.marker)
  }

  private addListener(marker: Marker, map: Map) {
    marker.addEventListener('click', (e: any) => {
      this.clicked.emit({
        e,
        map,
        marker
      })
    })
  }
}
