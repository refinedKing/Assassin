// ����Ļ�ϻ���button
// ������״̬
// * hidden - ����ʾ
// * idle - ��ʼ״̬
// * active - �����
// * deactive - ������

ig.module(
    'plugins.button'
).requires(
    'impact.entity'
)
    .defines(function () {

        Button = ig.Entity.extend({
            // ��С
            size:{ x:96, y:96 },
            //λ��
            location:{x:0, y:0},
            //״̬
            state:'idle',
            zIndex:10000,

            _oldPressed:false,
            _startedIn:false,

            init:function (x, y, settings) {
                this.parent(x, y, settings);
                //��ӳ�ʼ״̬����
                this.addAnim('idle', 0.2, [0]);
                //��ӱ�����Ķ���
                this.addAnim('active', 0.2, [1]);
                //��Ӳ����õĶ���
                this.addAnim('deactive', 0.2, [2]);
            },

            update:function () {
                //����λ��
                this.pos.x = ig.game.screen.x + this.location.x;
                this.pos.y = ig.game.screen.y + this.location.y;
                //�ж��Ƿ�ɼ�
                if (this.state !== 'hidden') {
                    //��ȡ����״̬
                    var _clicked = ig.input.state('click');
                    //�ж��Ƿ����벢��������Ч
                    if (!this._oldPressed && _clicked && this._inButton()) {
                        this._startedIn = true;
                    }

                    if (this._startedIn && this.state !== 'deactive' && this._inButton()) {
                        // ����ť������
                        if (_clicked && !this._oldPressed) {
                            this.setState('active');
                            this.pressedDown();
                        }
                        else if (_clicked) { // pressed
                            this.setState('active');
                            this.pressed();
                        }
                        else if (this._oldPressed) { // up
                            this.setState('idle');
                            this.pressedUp();
                        }
                    }
                    else if (this.state === 'active') {
                        this.setState('idle');
                    } else if (this.state === 'deactive') {
                        this.setState('deactive');
                    }

                    if (this._oldPressed && !_clicked) {
                        this._startedIn = false;
                    }

                    this._oldPressed = _clicked;
                }
            },

            draw:function () {
                this.parent();
            },

            //���ö���
            setState:function (s) {
                this.state = s;
                if (this.state !== 'hidden') {
                    this.currentAnim = this.anims[ this.state ].rewind();
                }
            },

            //���µķ���
            pressedDown:function () {
            },
            //����¼�����
            pressed:function () {
            },
            //�ͷŷ���
            pressedUp:function () {
            },

            //��ȡ�ǲ����ڰ�ť��Χ�ڵ��
            _inButton:function () {
                return ig.input.mouse.x + ig.game.screen.x > this.pos.x &&
                    ig.input.mouse.x + ig.game.screen.x < this.pos.x + this.size.x &&
                    ig.input.mouse.y + ig.game.screen.y > this.pos.y &&
                    ig.input.mouse.y + ig.game.screen.y < this.pos.y + this.size.y;
            }
        });

    });