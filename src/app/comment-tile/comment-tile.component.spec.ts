import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentTileComponent } from './comment-tile.component';

describe('CommentTileComponent', () => {
  let component: CommentTileComponent;
  let fixture: ComponentFixture<CommentTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
