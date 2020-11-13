import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-secret-santa',
  templateUrl: './secret-santa.component.html',
  styleUrls: ['./secret-santa.component.scss']
})
export class SecretSantaComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  public membersList: FormGroup;
  public secretSanta: FormGroup;
  public result = [];
  public peopleToGive;
  public peopleToRecieve;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.secretSanta = this.fb.group({
      membersList: this.fb.array([new FormControl(), new FormControl()])
    });
  }

  onAddMember() {
    (this.secretSanta.get('membersList') as FormArray).push(new FormControl());
  }

  membersArray(group: FormGroup): FormArray {
    return group.get('membersList') as FormArray;
  }

  removeMember(group: FormGroup, index: number) {
    (group.get('membersList') as FormArray).removeAt(index);
  }




  shuffle() {
    const membersList = this.secretSanta.get('membersList').value;
    const howManyPeople = membersList.length;
    if (2 < howManyPeople) {
      const peopleToGive = [];
      const peopleToRecieve = [];
      let howManyLeft = howManyPeople;

      while (1 < howManyLeft) {
        const randGive = Math.floor(Math.random() * howManyLeft);
        const randRec = Math.floor(Math.random() * howManyLeft);
        if (peopleToGive[randGive] !== peopleToRecieve[randRec]) {
          peopleToGive.splice(randGive, 1);
          peopleToRecieve.splice(randRec, 1);
          howManyLeft--;
        } else {
          continue;
        }
      }
      this.peopleToGive = peopleToGive[0];
      this.peopleToRecieve = peopleToRecieve[0];
    }
  }


  public createPair() {
    const membersList = this.secretSanta.get('membersList').value;
    const result = [];
    const recipients = membersList.slice();
    for (let i = 0; i < membersList.length; i++) {
      const sender = membersList[i];
      console.log(sender);
      if (sender) {
        let recipientIndex = Math.floor(Math.random() * recipients.length);
        while (recipients[recipientIndex] === sender) {
          recipientIndex = Math.floor(Math.random() * recipients.length);
        }
        const receiver = recipients.splice(recipientIndex, 1)[0];
        console.log(receiver);
        result.push({
          sender,
          receiver
        });
      }
    }
    console.log(result);
    this.result = result;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.complete();
  }
}
