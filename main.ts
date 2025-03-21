/**
 * Custom blocks
 */
namespace makecodeTest {
    /**
     * count to 20
     */
    //% block="count to 20"
    export function count_to_20(): void {
        for (let i = 0; i < 20; i++) {
            player.execute("say " + i);
        }
    }
    /**
     * say hi
     */
    //% block="say hi"
    export function say_hi(): void {
        player.execute("say hi");
    }
    /**
     * place blocks stacked
     */
    //% block="place blocks at $x $y $z"
    //% x.defl=0 y.defl=0 z.defl=0
    export function place_blocks(x: number, y: number, z: number) {
        for (let i = y; i < 20; i++) {
            player.execute("block pos" + [x, i, z])
            blocks.place(STONE, pos(x, i, z))
        }
    }
}