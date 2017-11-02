import {
  Directive,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core'

import { toNavigationControlOptions } from '../helpers/transformer'
import { nullCheck } from '../helpers/validate'
import { MapService } from '../providers/mapService'
import { BMap } from '../types/BMap'
import { BControl, ControlType } from '../types/Control'
import { BMapInstance } from '../types/Map'

@Directive({
  selector: 'control'
})
export class ControlComponent implements OnInit, OnDestroy {
  @Input private type: ControlType
  @Input private options: { [key: string]: any }

  private control: BControl

  constructor(private _service: MapService) {}

  public ngOnInit() {
    nullCheck(this.type, 'type is required for <control>')

    this._service.addControl((map: BMapInstance) => {
      this.control = this.createControl(this.type, this.options)
      return this.control
    })
  }

  public ngOnDestroy() {
    this._service.removeControl(this.control)
  }

  private createControl(
    type: ControlType,
    options: { [key: string]: any }
  ): BControl | null {
    if (type === 'navigation') {
      return new window.BMap.NavigationControl(
        toNavigationControlOptions(options)
      )
    }
    if (type === 'overviewmap') {
      return new window.BMap.OverviewMapControl(
        toOverviewMapControlOptions(options)
      )
    }
    return null
  }
}
