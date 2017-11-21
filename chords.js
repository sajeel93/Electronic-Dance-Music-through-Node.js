var scribble = require('scribbletune');
var clip = scribble.clip({
    notes: ['c4'],
    pattern: 'x_x_x_x-x-x-x-x-x__x--x---x---'.repeat(4),
    sizzle: true
});  

var clip_two = scribble.clip({
    notes: ['c4', 'd4', 'e4', 'f4', 'g4', 'a4', 'b4', 'c5',],
    pattern: 'x--x---x---'.repeat(4),
    sizzle: true
}); 

//Scale
var clip_three = scribble.clip({
    notes: scribble.scale('c', 'major'),
    pattern: 'x---x-x-x-x-x-xx-x-x-x-x-x-x-x',
    sizzle: true
}); 

var cMajor = scribble.scale('c', 'major');
var clip1 = scribble.clip({
    notes: cMajor.filter((a,x) => x % 2 === 0),
    pattern: 'x-x-x-x-x-x-x-x-',
    sizzle: true
});

var clip2 = scribble.clip({
    notes: cMajor.filter((a,x) => x % 2),
    pattern: 'x--x---x---'.repeat(8),
    sizzle: true
});


scribble.midi(clip, 'chords.mid');
scribble.midi(clip_two, 'chords2.mid');
scribble.midi(clip_three, 'chords3.m4a');
scribble.midi(clip1.concat(clip2));
