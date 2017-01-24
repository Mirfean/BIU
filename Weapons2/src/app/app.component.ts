import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  title = 'My list of weapons';
  weapons = WEAPONS;
  weapon: Weapon = {id: 0,name: '', like: 0, likes: false};
  selectedWeapon: Weapon = this.weapon;

  like(weapon: Weapon): void { 
      weapon.like++;
  }

  unlike(weapon: Weapon): void { 
    if (weapon.like >= 1)
    {
      weapon.like--;
    }
  }

  onSelect(weapon: Weapon): void {
    this.selectedWeapon = weapon;
  }

  onSort():void{
    function compare(a,b) {
      if (a.like < b.like)
        return 1;
      if (a.like > b.like)
        return -1;
      return 0;
    }

    WEAPONS.sort(compare);
  }
  
}
export class Weapon {
  id: number;
  name: string;
  like: number;
  likes: boolean;
}
const WEAPONS: Weapon[] = [
  { id: 1, name: 'Longsword', like:0, likes: false},
  { id: 2, name: 'Axe', like:0, likes: false},
  { id: 3, name: 'Flail', like:0, likes: true},
  { id: 4, name: 'Dagger', like:0, likes: false},
  { id: 5, name: 'Scimitar', like:0, likes: false},
  { id: 6, name: 'Rapier', like:0, likes: false},
  { id: 7, name: 'Mace', like:0, likes: false},
  { id: 8, name: 'WARHAMMER', like:0, likes: false},
  { id: 9, name: 'Halberd', like:0, likes: false},
  { id: 10, name: 'Scythe', like:0, likes: false},
  { id: 11, name: 'Spear', like:0, likes: false},
  { id: 12, name: 'Greatsword', like:0, likes: false},
  { id: 13, name: 'Stick', like:0, likes: false},
  { id: 14, name: 'Nunchaku', like:0, likes: false},
  { id: 15, name: 'Really BIG Stone', like:0, likes: false},
  { id: 16, name: 'Club', like:0, likes: false},
];

