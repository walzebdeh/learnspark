// Concept help content for math levels (grades 5-8)
const LEVEL_HELP = {
  28: {
    title: 'Multiplying 2-Digit Numbers',
    body: `<p>Break it into two simpler multiplications, then add.</p>
<div class="help-ex"><strong>Example: 23 × 14</strong><br>
Step 1: 23 × 4 = 92<br>
Step 2: 23 × 10 = 230<br>
Step 3: 92 + 230 = <strong>322</strong></div>`
  },
  29: {
    title: 'Multiplying a 3-Digit Number',
    body: `<p>Multiply each digit of the big number by the small number, right to left.</p>
<div class="help-ex"><strong>Example: 214 × 3</strong><br>
4 × 3 = 12 → write 2, carry 1<br>
1 × 3 + 1 = 4<br>
2 × 3 = 6<br>
Answer: <strong>642</strong></div>`
  },
  30: {
    title: 'Long Division',
    body: `<p>Ask: how many times does the divisor fit into the dividend?</p>
<div class="help-ex"><strong>Example: 156 ÷ 12</strong><br>
12 × 10 = 120 → too small<br>
12 × 13 = 156 ✓<br>
Answer: <strong>13</strong></div>`
  },
  31: {
    title: 'Order of Operations (PEMDAS)',
    body: `<p><strong>Multiply and Divide BEFORE you Add and Subtract.</strong></p>
<div class="help-ex"><strong>Example: 2 + 3 × 4</strong><br>
First: 3 × 4 = 12<br>
Then: 2 + 12 = <strong>14</strong></div>
<p>Remember: PEMDAS — Parentheses, Exponents, ×÷, +−</p>`
  },
  32: {
    title: 'Adding Decimals',
    body: `<p>Line up the decimal points, then add just like whole numbers.</p>
<div class="help-ex"><strong>Example: 3.4 + 2.8</strong><br>
&nbsp; 3.4<br>
+ 2.8<br>
<hr style="margin:4px 0">
&nbsp; 6.2</div>`
  },
  33: {
    title: 'Subtracting Decimals',
    body: `<p>Line up the decimal points, then subtract just like whole numbers.</p>
<div class="help-ex"><strong>Example: 7.5 − 3.2</strong><br>
&nbsp; 7.5<br>
− 3.2<br>
<hr style="margin:4px 0">
&nbsp; 4.3</div>`
  },
  34: {
    title: 'Percentages — Quick Tricks',
    body: `<p>"Percent" means <strong>out of 100</strong>.</p>
<div class="help-ex">
10% of n → divide by 10<br>
50% of n → divide by 2<br>
25% of n → divide by 4<br>
<br>
<strong>Example: 25% of 80</strong><br>
80 ÷ 4 = <strong>20</strong>
</div>`
  },
  35: {
    title: 'Fraction of a Number',
    body: `<p><strong>Divide by the bottom, multiply by the top.</strong></p>
<div class="help-ex"><strong>Example: ¾ of 20</strong><br>
Step 1: 20 ÷ 4 = 5 (bottom number)<br>
Step 2: 5 × 3 = <strong>15</strong> (top number)</div>`
  },
  36: {
    title: 'Multiplying Larger 2-Digit Numbers',
    body: `<p>Same idea as before — break it into parts.</p>
<div class="help-ex"><strong>Example: 45 × 32</strong><br>
45 × 2 = 90<br>
45 × 30 = 1350<br>
90 + 1350 = <strong>1440</strong></div>`
  },
  37: {
    title: 'Dividing Larger Numbers',
    body: `<p>Use long division — chunk by chunk.</p>
<div class="help-ex"><strong>Example: 312 ÷ 12</strong><br>
12 × 20 = 240<br>
312 − 240 = 72<br>
12 × 6 = 72<br>
20 + 6 = <strong>26</strong></div>`
  },
  38: {
    title: 'Adding Integers (with Negatives)',
    body: `<p><strong>Same signs:</strong> add, keep the sign.<br>
<strong>Different signs:</strong> subtract, keep the sign of the bigger number.</p>
<div class="help-ex">
(−3) + (−5) = −8 &nbsp;(same signs, add)<br>
(−7) + 4 = −3 &nbsp;(7−4=3, bigger is −7)
</div>`
  },
  39: {
    title: 'Subtracting Integers',
    body: `<p><strong>Subtracting a negative = adding!</strong><br>a − (−b) = a + b</p>
<div class="help-ex">
5 − (−3) = 5 + 3 = <strong>8</strong><br>
(−2) − (−4) = −2 + 4 = <strong>2</strong>
</div>`
  },
  40: {
    title: 'Multiplying Integers',
    body: `<p>The sign rule is simple:</p>
<div class="help-ex">
<strong>Same signs → Positive (+)</strong><br>
(−3) × (−4) = 12 ✓<br><br>
<strong>Different signs → Negative (−)</strong><br>
(−3) × 4 = −12 ✓
</div>`
  },
  41: {
    title: 'One-Step Equations (+ and −)',
    body: `<p>Do the <strong>opposite</strong> operation on both sides to isolate x.</p>
<div class="help-ex">
<strong>x + 7 = 15</strong><br>
Subtract 7: x = 15 − 7 = <strong>8</strong><br><br>
<strong>x − 4 = 9</strong><br>
Add 4: x = 9 + 4 = <strong>13</strong>
</div>`
  },
  42: {
    title: 'One-Step Equations (× and ÷)',
    body: `<p>Do the <strong>opposite</strong> operation to find x.</p>
<div class="help-ex">
<strong>3x = 18</strong><br>
Divide by 3: x = 18 ÷ 3 = <strong>6</strong><br><br>
<strong>x ÷ 4 = 5</strong><br>
Multiply by 4: x = 5 × 4 = <strong>20</strong>
</div>`
  },
  43: {
    title: 'Percentages — Any Percent',
    body: `<p>Divide by 100, then multiply. (Or move decimal 2 places left.)</p>
<div class="help-ex">
<strong>35% of 60</strong><br>
35 ÷ 100 = 0.35<br>
0.35 × 60 = <strong>21</strong>
</div>`
  },
  44: {
    title: 'Two-Step Equations',
    body: `<p>Step 1: Move the number (add or subtract both sides).<br>
Step 2: Divide or multiply to find x.</p>
<div class="help-ex">
<strong>2x + 3 = 11</strong><br>
Step 1: 2x = 11 − 3 = 8<br>
Step 2: x = 8 ÷ 2 = <strong>4</strong>
</div>`
  },
  45: {
    title: 'Proportions — Cross Multiply',
    body: `<p>If a/b = c/d, then <strong>a × d = b × c</strong></p>
<div class="help-ex">
<strong>3/4 = x/12</strong><br>
3 × 12 = 4 × x<br>
36 = 4x<br>
x = 36 ÷ 4 = <strong>9</strong>
</div>`
  },
  46: {
    title: 'Percent Increase',
    body: `<p>New = Original + (Original × percent ÷ 100)</p>
<div class="help-ex">
<strong>50 increased by 20%</strong><br>
50 × 0.20 = 10<br>
50 + 10 = <strong>60</strong>
</div>`
  },
  47: {
    title: 'Percent Decrease',
    body: `<p>New = Original − (Original × percent ÷ 100)</p>
<div class="help-ex">
<strong>80 decreased by 25%</strong><br>
80 × 0.25 = 20<br>
80 − 20 = <strong>60</strong>
</div>`
  },
  48: {
    title: 'Area of a Rectangle',
    body: `<p><strong>Area = Length × Width</strong><br>
Area counts the square units inside the shape.</p>
<div class="help-ex">
<strong>Example: 7 × 4</strong><br>
7 × 4 = <strong>28 square units</strong>
</div>`
  },
  49: {
    title: 'Area of a Triangle',
    body: `<p><strong>Area = ½ × Base × Height</strong><br>
The height goes straight up from the base (perpendicular).</p>
<div class="help-ex">
<strong>Example: base=6, height=4</strong><br>
½ × 6 × 4 = <strong>12</strong>
</div>`
  },
  50: {
    title: 'Perimeter of a Rectangle',
    body: `<p><strong>Perimeter = total distance around the outside.</strong><br>
P = 2 × (length + width)</p>
<div class="help-ex">
<strong>Example: 8 × 5 rectangle</strong><br>
2 × (8 + 5) = 2 × 13 = <strong>26</strong>
</div>`
  },
  51: {
    title: 'Square Roots',
    body: `<p>√n asks: <strong>"What number times itself equals n?"</strong></p>
<div class="help-ex">
√36 = 6 &nbsp;because 6 × 6 = 36<br>
√81 = 9 &nbsp;because 9 × 9 = 81<br>
√100 = 10 because 10 × 10 = 100
</div>`
  },
  52: {
    title: 'Exponents',
    body: `<p>bⁿ means <strong>multiply b by itself n times.</strong></p>
<div class="help-ex">
2⁴ = 2 × 2 × 2 × 2 = <strong>16</strong><br>
3³ = 3 × 3 × 3 = <strong>27</strong><br>
5² = 5 × 5 = <strong>25</strong>
</div>`
  },
  53: {
    title: 'Square Roots (Larger Numbers)',
    body: `<p>Same idea — find what number times itself gives you the answer.</p>
<div class="help-ex">
√144 = 12 because 12 × 12 = 144<br>
√225 = 15 because 15 × 15 = 225
</div>
<p>Tip: memorise perfect squares up to 15²!</p>`
  },
  54: {
    title: 'Cubes and Cube Roots',
    body: `<p>n³ = n × n × n<br>
∛n asks: <strong>"What number cubed equals n?"</strong></p>
<div class="help-ex">
4³ = 4 × 4 × 4 = <strong>64</strong><br>
∛64 = <strong>4</strong><br><br>
2³ = 8 &nbsp;→ ∛8 = 2<br>
3³ = 27 → ∛27 = 3
</div>`
  },
  55: {
    title: 'Pythagorean Theorem',
    body: `<p>In a right triangle: <strong>a² + b² = c²</strong><br>
c is the <strong>hypotenuse</strong> — the longest side, opposite the right angle.</p>
<div class="help-ex">
<strong>Example: a=3, b=4</strong><br>
3² + 4² = 9 + 16 = 25<br>
c = √25 = <strong>5</strong>
</div>`
  },
  56: {
    title: 'Absolute Value',
    body: `<p>|n| = the <strong>distance from zero</strong> on the number line. Always positive!</p>
<div class="help-ex">
|−7| = <strong>7</strong><br>
|3| &nbsp;= <strong>3</strong><br>
|0| &nbsp;= <strong>0</strong>
</div>`
  },
  57: {
    title: 'Evaluating Expressions',
    body: `<p><strong>Replace x with the given number</strong>, then calculate step by step.</p>
<div class="help-ex">
<strong>2x + 5, when x = 3</strong><br>
Step 1: 2(3) + 5<br>
Step 2: 6 + 5 = <strong>11</strong>
</div>`
  },
  58: {
    title: 'Volume of a Rectangular Prism',
    body: `<p><strong>Volume = Length × Width × Height</strong><br>
Volume counts the cubic units that fill the shape.</p>
<div class="help-ex">
<strong>Example: 5 × 3 × 2</strong><br>
5 × 3 = 15<br>
15 × 2 = <strong>30 cubic units</strong>
</div>`
  },
  59: {
    title: 'Scientific Notation',
    body: `<p>a × 10ⁿ means <strong>move the decimal n places to the right.</strong></p>
<div class="help-ex">
3 × 10² = 3 × 100 = <strong>300</strong><br>
4 × 10³ = 4 × 1000 = <strong>4,000</strong><br>
7 × 10⁴ = 7 × 10,000 = <strong>70,000</strong>
</div>`
  }
};
