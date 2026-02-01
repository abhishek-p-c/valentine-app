import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valentine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './valentine.html',
  styleUrl: './valentine.css'
})
export class ValentineComponent {
  @ViewChild('playArea') playArea!: ElementRef<HTMLDivElement>;
  @ViewChild('noButton') noButton!: ElementRef<HTMLButtonElement>;

  // No button movement
  noBtnTop = 0;
  noBtnLeft = 0;
  isRunning = false;

  // Popup controls
  showPopup = false;
  popupImage = '';
  popupMessage = '';

  // Open popup based on which button was clicked
  openPopup(type: 'yes' | 'no') {
    if (type === 'yes') {
      this.popupImage = 'Punchiri.jpeg';
      this.popupMessage = 'Uff Oru kulsithapriya thanne nee 💖';
    } else {
      this.popupImage = 'Adichiri.jpeg';
      this.popupMessage = 'Shyee ath kashtaayi !!! (Oradi vech thannal indello !)';
    }

    this.showPopup = true;
  }

  // Close popup
  closePopup() {
    this.showPopup = false;
  }

  // Make the No button run away
  moveButton() {
    const area = this.playArea.nativeElement;
    const btn = this.noButton.nativeElement;

    const maxX = area.clientWidth - btn.offsetWidth;
    const maxY = area.clientHeight - btn.offsetHeight;

    this.noBtnLeft = Math.random() * maxX;
    this.noBtnTop = Math.random() * maxY;

    this.isRunning = true;
  }
}
