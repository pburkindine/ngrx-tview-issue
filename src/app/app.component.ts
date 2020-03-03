import {
  Component,
  OnDestroy,
  AfterViewInit,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver
} from "@angular/core";
import { Store, select } from "@ngrx/store";
import { State } from "./+state/reducers";
import { updatePassedComponent } from "./+state/actions/index";
import { Passable1Component } from "./passable/passable1/passable1.component";
import { Passable2Component } from "./passable/passable2/passable2.component";
import { getPassedComponent } from "./+state/selectors/index";
import { Subject } from "rxjs";
import { takeUntil, filter } from "rxjs/operators";
import { Passable3Component } from "./passable/passable3/passable3.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private destroy$ = new Subject<void>();

  readonly passedComponent$ = this.store.pipe(
    select(getPassedComponent),
    filter(passedComponent => !!passedComponent),
    takeUntil(this.destroy$)
  );

  @ViewChild("passableArea", {
    read: ViewContainerRef
  })
  private passableArea: ViewContainerRef;

  constructor(
    private store: Store<State>,
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit(): void {
    this.passedComponent$.subscribe(passedComponent => {
      const factory = this.resolver.resolveComponentFactory(passedComponent);
      this.passableArea.clear();

      this.passableArea.createComponent(factory, 0);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  pass1(): void {
    this.store.dispatch(
      updatePassedComponent({ passedComponent: Passable1Component })
    );
  }

  pass2(): void {
    this.store.dispatch(
      updatePassedComponent({ passedComponent: Passable2Component })
    );
  }

  unpassed(): void {
    const factory = this.resolver.resolveComponentFactory(Passable3Component);
    this.passableArea.clear();

    this.passableArea.createComponent(factory, 0);
  }
}
