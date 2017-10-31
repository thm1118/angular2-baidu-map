import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  ViewChild
} from '@angular/core'

import { MapService } from '../providers/mapService'
import { ScriptLoader } from '../providers/scriptLoader'
import { Map, MapOptions } from '../types/Map'

@Component({
  providers: [MapService, ScriptLoader],
  selector: 'baidu-map',
  styles: [
    `
        .baidu-map-instance {
            width: 100%;
            height: 100%;
            display: none;
        }
        .baidu-map-offline {
            width: 100%;
            height: 100%;
            background-color: #E6E6E6;
            position: relative;
            display: none;
        }
        .baidu-map-offline label {
            fontSize: 30px;
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
        }
        .tranclude-content {
            display: none;
        }
        `
  ],
  template: `
    <div #mapinstance class="baidu-map-instance"></div>
    <div class="baidu-map-offline">
        <label>{{ 'NO_NETWORK' }}</label>
    </div>
    <div class="tranclude-content">
        <ng-content></ng-content>
    </div>
    `
})
export class MapComponent implements OnInit, OnChanges {
  @Input() private options: MapOptions

  @Output() private loaded = new EventEmitter()
  @Output() private clicked = new EventEmitter()

  @ViewChild('mapinstance') private mapInstance: ElementRef

  constructor(private _service: MapService) {}

  public ngOnInit() {
    this._service
      .createMap(this.mapInstance.nativeElement, this.options)
      .then(map => {
        this.loaded.emit(map)
        return map
      })
      .then(map => {
        this.addListener(map)
      })
  }

  public ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    const opts = changes.options.currentValue as MapOptions
    this._service.setOptions(opts)
  }

  public ngOnDestroy() {
    console.log('on map destroy')
  }

  private addListener(map: Map) {
    map.addEventListener('click', (e: any) => {
      this.clicked.emit(e)
    })
  }
}
