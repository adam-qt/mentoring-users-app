import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FoldersEntity} from '@users/materials/data-access'
import {FoldersFacade} from '@users/materials/data-access';
import { Router } from '@angular/router';

@Component({
  selector: 'users-folders-state-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './folders-list.component.html',
  styleUrls: ['./folders-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class FoldersListComponent {
  @Input({required: true}) folder!: FoldersEntity ;

  private readonly foldersFacade: FoldersFacade = inject(FoldersFacade)
  private readonly router = inject(Router);
  constructor() {
  }

  deleteFolder(id: number){
    this.foldersFacade.deleteFolder(id)
  }
  openFolder(){
    this.router.navigate(['materials', this.folder.id]);
  }

}
